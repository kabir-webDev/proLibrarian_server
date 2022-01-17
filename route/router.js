import express from "express";
import {
  addUser,
  getRouter,
  getTodo,
  addTodo,
} from "../controller/user-controller.js";

const route = express.Router();

route.get("/", getRouter);
route.get("/todos", getTodo);
route.post("/todo", addTodo);
route.post("/add", addUser);

export default route;
