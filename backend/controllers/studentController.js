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

export const addStudent = async (req, res) => {
  const { first_name, last_name } = req.body;
  const class_id = req.params.class_id;

  try {
    const result = await db.query(
      "SELECT * FROM students WHERE first_name = $1 AND last_name = $2",
      [first_name, last_name]
    );

    if (result.rows.length > 0) {
      const student_id = result.rows[0].id;
      const class_student = await db.query(
        "SELECT * FROM students_classes WHERE student_id = $1 AND class_id = $2",
        [student_id, class_id]
      );
      if (class_student.rows.length > 0) {
        return res
          .status(400)
          .json({ message: "Student already enrolled in this class" });
      }

      await db.query(
        "INSERT INTO students_classes (student_id,class_id) VALUES ($1,$2)",
        [student_id, class_id]
      );

      return res.status(201).json({ message: "Student added successfully" });
    }

    const newStudent = await db.query(
      "INSERT INTO students (first_name,last_name) VALUES ($1,$2) RETURNING *",
      [first_name, last_name]
    );

    const newStudentId = newStudent.rows[0].id;

    await db.query(
      "INSERT INTO students_classes (student_id,class_id) VALUES ($1,$2)",
      [newStudentId, class_id]
    );

    return res
      .status(201)
      .json({ message: "Student created and added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteStudent = async (req, res) => {
  const class_id = req.params.class_id;
  const student_id = req.params.student_id;

  try {
    const response = await db.query(
      "DELETE FROM students_classes WHERE student_id = $1 AND class_id = $2",
      [student_id, class_id]
    );
    if (response.rowCount === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
