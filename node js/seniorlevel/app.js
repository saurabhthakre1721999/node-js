const express = require("express");

const todosRouter = require("./src/feature/todos/router.js");
const app = express();
const port = 5000;
const host = "localhost";
app.use(express.json());
app.use("/todos", todosRouter);
app.listen(port, host, () => {
  console.log(`server running on http://${port}:${host}`);
});
