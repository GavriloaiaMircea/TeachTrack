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
    res.status(500).json({ message: "Internal server error" });
  }
};
