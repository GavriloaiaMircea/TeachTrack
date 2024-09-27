import React, { useState } from "react";
import GradeForm from "../components/GradeForm";
import { useNavigate, useParams } from "react-router-dom";
import { addGrade } from "../services/gradeService";

function AddGradePage() {
  const [grade, setGrade] = useState({
    date_added: "",
    grade: "",
    observation: "",
  });
  const navigate = useNavigate();
  const { id, studentId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    addGrade(studentId, id, grade)
      .then(() => {
        navigate(`/class/${id}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setGrade({
      ...grade,
      [name]: value,
    });
  };

  return (
    <GradeForm
      text={"Add a new Grade"}
      handleSubmit={handleSubmit}
      newGrade={grade}
      handleChange={handleChange}
      handleCancel={() => navigate(`/class/${id}`)}
    />
  );
}

export default AddGradePage;
