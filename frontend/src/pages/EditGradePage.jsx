import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getGradeById, updateGrade } from "../services/gradeService";
import GradeForm from "../components/GradeForm";

function EditGradePage() {
  const { gradeId } = useParams();
  const [grade, setGrade] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getGradeById(gradeId)
      .then((data) => {
        setGrade(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [gradeId]);

  const handleSumit = (e) => {
    e.preventDefault();
    console.log(grade);

    updateGrade(gradeId, grade)
      .then(() => {
        navigate(-1);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setGrade({ ...grade, [name]: value });
  };

  return (
    <GradeForm
      text={"Update grade"}
      handleSubmit={handleSumit}
      newGrade={grade}
      handleChange={handleChange}
      handleCancel={() => navigate(-1)}
    />
  );
}

export default EditGradePage;
