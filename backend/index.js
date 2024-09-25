import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import classRouter from "./routes/classRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: `${process.env.CORS_ORIGIN}`,
  })
);

app.use("/api/users", userRouter);
app.use("/api/classes", classRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
