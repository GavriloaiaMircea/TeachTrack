import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getClassById } from "../services/classService";
import { getStudents, deleteStudent } from "../services/studentService";
import ClassHeading from "../components/classHeading";
import StudentList from "../components/StudentList";

function ClassPage() {
  const [classData, setClassData] = useState({
    class_name: "",
    subject: "",
    school_year: "",
  });
  const [students, setStudents] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getClassById(id)
      .then((data) => {
        setClassData(data.class);
      })
      .catch((err) => {
        console.error(err);
      });

    getStudents(id)
      .then((data) => {
        setStudents(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleSubmit = () => {
    navigate(`/class/${id}/add-student`);
  };

  const onDelete = (studentId) => {
    deleteStudent(studentId, id)
      .then(() => {
        setStudents(students.filter((student) => student.id !== studentId));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <ClassHeading
        classData={classData}
        handleBack={() => navigate("/")}
        handleAddStudent={handleSubmit}
      />
      <StudentList students={students} onDelete={onDelete} />
    </div>
  );
}

export default ClassPage;
