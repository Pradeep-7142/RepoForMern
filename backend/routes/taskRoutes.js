import { Router } from "express";
const router = Router();
import Task, { find, findByIdAndUpdate, findByIdAndDelete } from "../models/Task";


router.get("/", async (req, res) => {
  const tasks = await find();
  res.json(tasks);
});


router.post("/", async (req, res) => {
  const newTask = new Task({ title: req.body.title });
  const savedTask = await newTask.save();
  res.json(savedTask);
});


router.put("/:id", async (req, res) => {
  const updated = await findByIdAndUpdate(
    req.params.id,
    { completed: req.body.completed },
    { new: true }
  );
  res.json(updated);
});


router.delete("/:id", async (req, res) => {
  await findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

export default router;
