import userData from "../model/user-schema.js";
import mongoose from "mongoose";
const todoSchema = mongoose.Schema({
  todo: String,
  deadline: Number,
});
const Todo = new mongoose.model("todo", todoSchema);

export const getTodo = async (req, res) => {
  try {
    let todoList = await Todo.find();
    res.status(200).json(todoList);
  } catch (err) {
    res.send({ message: err.message });
  }
};

export const addTodo = async (req, res) => {
  let todo = req.body;
  let todoList = new Todo(todo);
  try {
    todoList.save();
    res.status(200).json({ result: todoList });
  } catch (err) {
    console.log(err.message);
  }
};

export const getRouter = async (req, res) => {
  try {
    let user = await userData.find({ name: "Eren" });
    res.status(200).json(user);
  } catch (err) {
    res.send({ message: err.message });
  }
};

export const addUser = async (req, res) => {
  const user = req.body;
  const addUser = new userData(user);
  try {
    await addUser.save();
    res.status(200).json({ addUser });
  } catch (err) {
    res.send({ error: err.message });
  }
};
