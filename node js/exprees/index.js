import express from "express";
const app = express();
const port = 8000;
const host = "localhost";

app.get("/", (req, res) => {
  res.end("express server");
});

app.listen(port, host, () => {
  console.log(`server live at http://${host}:${port}`);
});
