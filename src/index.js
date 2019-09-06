const app = require("./app");

app.listen(app.get("PORT"), () => {
  console.log(`the server is running at http://localhost:${app.get("PORT")}`);
});