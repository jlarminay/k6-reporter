//
// Generate HTML report from K6 summary summaryData
// Ben Coleman, March 2021
// Josh Larminay, May 2025
//

// Have to import ejs this way, nothing else works
import ejs from '../node_modules/ejs/ejs.min.js';
import template from './template.ejs?raw';

const version = '2.3.0';

//
// Main function should be imported and wrapped with the function handleSummary
//
export function htmlReport(summaryData, opts = {}) {
  // Default options
  if (!opts.title) {
    opts.title = new Date().toISOString().slice(0, 16).replace('T', ' ');
  }
  // eslint-disable-next-line
  if (!opts.hasOwnProperty('debug')) {
    opts.debug = false;
  }

  console.log(`[k6-reporter v${version}] Generating HTML summary report`);
  let metricListSorted = [];

  if (opts.debug) {
    console.log(JSON.stringify(summaryData, null, 2));
  }

  // Count the thresholds and those that have failed
  let thresholdFailures = 0;
  let thresholdCount = 0;
  for (let metricName in summaryData.metrics) {
    metricListSorted.push(metricName);
    if (summaryData.metrics[metricName].thresholds) {
      thresholdCount++;
      let thresholds = summaryData.metrics[metricName].thresholds;
      for (let thresName in thresholds) {
        if (!thresholds[thresName].ok) {
          thresholdFailures++;
        }
      }
    }
  }

  // Count the checks and those that have passed or failed
  // NOTE. Nested groups are not checked!
  let checkFailures = 0;
  let checkPasses = 0;
  if (summaryData.root_group.checks) {
    let { passes, fails } = countChecks(summaryData.root_group.checks);
    checkFailures += fails;
    checkPasses += passes;
  }

  for (let group of summaryData.root_group.groups) {
    if (group.checks) {
      let { passes, fails } = countChecks(group.checks);
      checkFailures += fails;
      checkPasses += passes;
    }
  }

  const standardMetrics = [
    'grpc_req_duration',
    'http_req_duration',
    'http_req_waiting',
    'http_req_connecting',
    'http_req_tls_handshaking',
    'http_req_sending',
    'http_req_receiving',
    'http_req_blocked',
    'iteration_duration',
    'group_duration',
    'ws_connecting',
    'ws_msgs_received',
    'ws_msgs_sent',
    'ws_sessions',
  ];

  const otherMetrics = [
    'iterations',
    'data_sent',
    'checks',
    'http_reqs',
    'data_received',
    'vus_max',
    'vus',
    'http_req_failed',
    'http_req_duration{expected_response:true}',
  ];

  // Render the template
  const html = ejs.render(template, {
    data: summaryData,
    title: opts.title,
    standardMetrics,
    otherMetrics,
    thresholdFailures,
    thresholdCount,
    checkFailures,
    checkPasses,
    version,
  });

  // Return HTML string needs wrapping in a handleSummary result object
  // See https://k6.io/docs/results-visualization/end-of-test-summary#handlesummary-callback
  return html;
}

//
// Helper for counting the checks in a group
//
function countChecks(checks) {
  let passes = 0;
  let fails = 0;
  for (let check of checks) {
    passes += parseInt(check.passes);
    fails += parseInt(check.fails);
  }
  return { passes, fails };
}
