import express from 'express';

const app = express();
const port = 50051;

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});
app.get('/10', async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 10));
  res.json({ message: 'Waited for 10ms' });
});
app.get('/50', async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 50));
  res.json({ message: 'Waited for 50ms' });
});
app.get('/100', async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  res.json({ message: 'Waited for 100ms' });
});
app.get('/200', async (req, res) => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  res.json({ message: 'Waited for 200ms' });
});

// Start the server
app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
