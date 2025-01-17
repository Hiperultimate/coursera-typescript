import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(json());

import { adminRouter } from "./routes/admin.mjs";
import { userRouter } from "./routes/user.mjs";

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.get("/", async (req, res) => {
  res.send("<h1>Hello, viewer</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Express server is listening on http://localhost:${process.env.PORT}`
  );
});
