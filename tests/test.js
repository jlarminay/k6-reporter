import http from 'k6/http';
import { check } from 'k6';
import { Trend, Rate } from 'k6/metrics';

import { htmlReport } from '../dist/bundle.cjs';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export let options = {
  summaryTrendStats: ['count', 'min', 'med', 'avg', 'max', 'p(90)', 'p(95)', 'p(99)'],
  stages: [{ duration: '1s', target: 100 }],
  thresholds: {
    http_req_duration: ['avg<200'],
    http_req_failed: ['rate<0.01'],
  },
};

// Define the different routes
const customTrends = [];
const routes = ['/', '/10', '/50', '/100', '/200'];
routes.forEach((route) => {
  customTrends.push(new Trend(`api${route.replaceAll('/', '_')}`, true));
});

export default () => {
  // Randomly select a route for the current VU
  const selectedRoute = routes[Math.floor(Math.random() * routes.length)];
  const url = `http://host.docker.internal:50051${selectedRoute}`;

  const res = http.get(url);
  check(res, { 'Status is ok': (r) => r.status === 200 });
  customTrends[routes.indexOf(selectedRoute)].add(res.timings.duration);
};

export function handleSummary(data) {
  return {
    '/output/tests/summary.html': htmlReport(data, { debug: true }),
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  };
}
