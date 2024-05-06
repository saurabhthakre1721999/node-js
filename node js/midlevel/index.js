import express from "express";
const app = express();
const port = 4000;
const host = "localhost";

app.get(
  "/",
  (req, res, next) => {
    const { user } = req.query;
    if (!["bharat", "saurabh"].includes(user)) {
      return res.send({ massage: "invalid user" });
    }
    next();
  },
  (req, res) => {
    const { user } = req.query;
    res.status(200).send({ massage: `valid user ${user}` });
  }
);

app.listen(port, host, () => {
  console.log(`server running on http://${port}:${host}`);
});
