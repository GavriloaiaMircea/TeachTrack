import db from "../config/db.js";

export const getAttendance = async (req, res) => {
  const student_id = req.params.student_id.trim();
  const class_id = req.params.class_id.trim();

  try {
    const response = await db.query(
      "SELECT id FROM students_classes WHERE student_id = $1 AND class_id = $2",
      [student_id, class_id]
    );
    if (response.rowCount === 0) {
      return res.status(400).json({ message: "Student not found in class" });
    }

    const result = await db.query(
      "SELECT * FROM attendance WHERE student_class_id=$1",
      [response.rows[0].id]
    );
    if (result.rowCount === 0) {
      return res.status(400).json({ message: "No attendance found" });
    }

    return res
      .status(200)
      .json({ message: "Attendance found", attendance: result.rows });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const delteAttendance = async (req, res) => {
  const id = req.params.id.trim();

  try {
    const response = await db.query("DELETE FROM attendance WHERE id = $1", [
      id,
    ]);

    if (response.rowsCount === 0) {
      return res.status(400).json({ message: "Attendance not found" });
    }

    return res.status(200).json({ message: "Attendance deleted" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};
