const app = require('./app');

app.listen(app.get('PORT'), () => {
  // eslint-disable-next-line no-console
  console.log(`the server is running at http://localhost:${app.get('PORT')}`);
});
