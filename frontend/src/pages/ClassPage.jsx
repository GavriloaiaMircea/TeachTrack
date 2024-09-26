import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getClassById } from "../services/classService";
import { getStudents } from "../services/studentService";
import ClassHeading from "../components/classHeading";

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

  return (
    <div>
      <ClassHeading
        classData={classData}
        handleBack={() => navigate("/")}
        handleAddStudent={handleSubmit}
      />
      <h2>Students</h2>
      {students.length > 0 ? (
        students.map((student) => (
          <div key={student.id}>
            {student.first_name} {student.last_name}
          </div>
        ))
      ) : (
        <p>No students found</p>
      )}
    </div>
  );
}

export default ClassPage;
