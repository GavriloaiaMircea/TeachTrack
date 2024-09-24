import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import router from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
