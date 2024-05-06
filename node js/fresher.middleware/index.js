import express from "express";
const app = express();
const port = 8000;
const host = "localhost";
app.use(express.json());
app.post("/todos", (req, res) => {
  console.log("body", req.body);
  const { title } = req.body;
  if (!title) {
    return res.status(400).send({ massge: "first enter title" });
  }
  res.send({ massage: "todos add successfull" });
});

app.listen(port, host, () => {
  console.log(`server live at http://${host}:${port}`);
});
