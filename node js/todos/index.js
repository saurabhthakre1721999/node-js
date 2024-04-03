import express from "express";
import todosRouter from "./src/featurs/todos/todos.routes.js";
const app = express();
app.use(express.json());

// Method to create a standardized response

app.use("/todos", todosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
