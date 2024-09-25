import db from "../config/db.js";

export const getClasses = async (req, res) => {
  const teacher_id = req.params.teacher_id.trim();

  try {
    const result = await db.query(
      "SELECT * FROM classes WHERE teacher_id = $1",
      [teacher_id]
    );
    if (result.rows.length === 0) {
      return res.status(400).json({ message: "No classes found" });
    } else {
      return res
        .status(200)
        .json({ message: "Classes found", classes: result.rows });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createClass = async (req, res) => {
  const { teacher_id, class_name, subject, school_year } = req.body;

  try {
    const result = await db.query(
      "INSERT INTO classes (teacher_id, class_name, subject, school_year) VALUES ($1, $2, $3, $4) RETURNING *",
      [teacher_id, class_name, subject, school_year]
    );
    return res
      .status(201)
      .json({ message: "Class created", class: result.rows });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteClass = async (req, res) => {
  const class_id = req.params.class_id.trim();

  try {
    const result = await db.query("DELETE FROM classes WHERE id = $1", [
      class_id,
    ]);
    if (result.rowCount === 0) {
      return res.status(400).json({ message: "Class not found" });
    }
    return res.status(200).json({ message: "Class deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
