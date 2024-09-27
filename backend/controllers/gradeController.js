import db from "../config/db.js";

export const getGrades = async (req, res) => {
  const { student_id, class_id } = req.params;

  try {
    const student_class_id = await db.query(
      "SELECT id FROM students_classes WHERE student_id = $1 AND class_id = $2",
      [student_id, class_id]
    );

    if (student_class_id.rowCount === 0) {
      return res.status(404).json({ message: "Student not found in class" });
    }

    const grades = await db.query(
      "SELECT * FROM grades WHERE student_class_id = $1",
      [student_class_id.rows[0].id]
    );

    if (grades.rowCount === 0) {
      return res.status(404).json({ message: "No grades found" });
    }

    res.status(200).json(grades.rows);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server Error" });
  }
};

export const deleteGrade = async (req, res) => {
  const { id } = req.params;
  try {
    const grade = await db.query("DELETE FROM grades WHERE id = $1", [id]);

    if (grade.rowCount === 0) {
      return res.status(404).json({ message: "Grade not found" });
    }

    res.status(200).json({ message: "Grade deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
