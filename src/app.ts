import express from "express";
import cors from "cors";
import userRouter from "./app/modules/User/user-routes";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", userRouter);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
