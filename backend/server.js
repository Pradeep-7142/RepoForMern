import express, { json } from "express";
import { connect } from "mongoose";
import cors from "cors";
require("dotenv").config();

const app = express();


app.use(cors());
app.use(json());


import taskRoutes from "./routes/taskRoutes";
app.use("/api/tasks", taskRoutes);


connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
