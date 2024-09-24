import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/userRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use("/api/users", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
