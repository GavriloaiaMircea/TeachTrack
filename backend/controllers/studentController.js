import db from "../config/db.js";

export const getStudents = async (req, res) => {
  const class_id = req.params.class_id;

  try {
    const students = await db.query(
      "select s.id,first_name,last_name FROM students as s JOIN students_classes as sc ON s.id = sc.student_id JOIN classes as c on c.id = sc.class_id AND c.id = $1",
      [class_id]
    );

    if (students.rows.length === 0) {
      return res.status(404).json({ message: "No students found" });
    }

    res.status(200).json(students.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
