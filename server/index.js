import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://sanjaytomar717:izmj9Ir5VJiV6iC8@cluster0.ksgnvw2.mongodb.net/users",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use("/api/v1", userRoutes);

app.listen(3000, () => {
  console.log(`listening to http://localhost:3000`);
});
