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

export const addGrade = async (req, res) => {
  const { grade, date_added, observation } = req.body;
  const { student_id, class_id } = req.params;

  try {
    const student_class_id = await db.query(
      "SELECT * FROM students_classes WHERE student_id = $1 AND class_id = $2",
      [student_id, class_id]
    );

    if (student_class_id.rowCount === 0) {
      return res.status(404).json({ message: "Student not found in class" });
    }

    const newGrade = await db.query(
      "INSERT INTO grades (student_class_id, grade, date_added, observation) VALUES ($1, $2, $3, $4) RETURNING *",
      [student_class_id.rows[0].id, grade, date_added, observation]
    );

    if (newGrade.rowCount === 0) {
      return res.status(500).json({ message: "Error adding grade" });
    }

    return res
      .status(200)
      .json({ message: "Grade added", grade: newGrade.rows[0] });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getGradeById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await db.query("SELECT * FROM grades WHERE id = $1", [id]);
    if (response.rowCount === 0) {
      return res.status(404).json({ message: "Grade not found" });
    }

    res.status(200).json(response.rows[0]);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateGrade = async (req, res) => {
  const { id } = req.params;
  const { grade, date_added, observation } = req.body;

  try {
    const updateGrade = await db.query(
      "UPDATE grades SET grade = $1, date_added = $2, observation = $3 WHERE id = $4 RETURNING *",
      [grade, date_added, observation, id]
    );

    if (updateGrade.rowCount === 0) {
      return res.status(404).json({ message: "Grade not found" });
    }

    res
      .status(200)
      .json({ message: "Grade updated", grade: updateGrade.rows[0] });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
