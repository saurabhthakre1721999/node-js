import { v4 as uuidv4 } from "uuid";

import express from "express";
const router = express.Router();
let todos = [];
const createResponse = (data, message) => {
  return {
    data,
    meta: {
      message,
    },
  };
};
router.post("/", (req, res) => {
  try {
    const { title, description } = req.body;
    const timestamp = new Date().toISOString();
    const newTodo = { id: uuidv4(), title, description, timestamp };
    todos.push(newTodo);

    const response = createResponse(newTodo, "Todo added successfully");

    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", (req, res) => {
  try {
    const response = createResponse(
      { todos, totalRecords: todos.length },
      todos.length > 0 ? "Todos list found" : "No todos available"
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const todo = todos.find((todo) => todo.id === id);
    if (!todo) {
      const response = createResponse({}, "No todo found with the given ID");
      res.status(410).json(response);
    }
    const response = createResponse(todo, "Todo details found");
    return res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    todos = todos.filter((todo) => todo.id !== id);
    const response = createResponse(null, "Todo deleted successfully");
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    if (todoIndex !== -1) {
      todos[todoIndex] = { ...todos[todoIndex], title, description };
      const response = createResponse(
        todos[todoIndex],
        "Todo updated successfully"
      );
      res.status(200).json(response);
    } else {
      res.status(404).json({ message: "No todo found with the given ID" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
