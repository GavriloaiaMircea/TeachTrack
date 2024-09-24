import db from "../config/db.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

dotenv.config();

const saltRounds = parseInt(process.env.SALT_ROUNDS);

db.connect();

export const loginUser = async (req, res) => {
  const { usernameOrEmail, password } = req.body;

  try {
    const user = await db.query(
      "SELECT * FROM users WHERE email = $1 OR username = $1",
      [usernameOrEmail]
    );

    if (user.rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(400).json({ message: "Invalid password" });
    } else {
      res.status(200).json({ message: "Login successful", user: user.rows[0] });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const result = await db.query(
      "SELECT * FROM users WHERE email = $1 OR username = $2",
      [email, username]
    );

    if (result.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await db.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
