import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useUserStore from "../stores/useUserStore";
import { addClass } from "../services/classService";
import ClassForm from "../components/ClassForm";

function AddClassPage() {
  const [newClass, setNewClass] = useState({
    teacher_id: useUserStore.getState().user.id,
    class_name: "",
    subject: "",
    school_year: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "school_year") {
      const schoolYearRegex = /^[0-9]{4}-[0-9]{4}$/;
      if (!schoolYearRegex.test(value)) {
        setError("School year must be in the format YYYY-YYYY");
      } else {
        setError("");
      }
    }
    setNewClass((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (error === "") {
      await addClass(newClass);

      navigate("/");
    } else {
      alert("Please fix the errors before submitting the form.");
    }
  };

  return (
    <ClassForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      newClass={newClass}
      Cancel={() => navigate("/")}
      error={error}
      text={"Add a new Class!"}
      buttonText={"Add Class"}
    />
  );
}

export default AddClassPage;
