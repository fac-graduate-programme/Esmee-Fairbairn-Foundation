const app = require('./app');

const port = app.get('PORT');

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`the server is running at http://localhost:${port}`);
});
