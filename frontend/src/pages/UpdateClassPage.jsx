import React, { useState, useEffect } from "react";
import { getClassById, updateClass } from "../services/classService";
import { useParams } from "react-router-dom";
import ClassForm from "../components/ClassForm";
import { useNavigate } from "react-router-dom";

function UpdateClassPage() {
  const { id } = useParams();
  const [classData, setClassData] = useState({
    class_name: "",
    subject: "",
    school_year: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getClassById(id)
      .then((data) => {
        setClassData(data.class);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

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
    setClassData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (error === "") {
      await updateClass(classData);
      navigate("/");
    } else {
      alert("Please fix the errors before submitting the form.");
    }
  };

  return loading ? (
    <p>Loading...</p>
  ) : (
    <ClassForm
      newClass={classData}
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      Cancel={() => navigate("/")}
      error={error}
      text={"Update Class"}
      buttonText={"Update Class"}
    />
  );
}

export default UpdateClassPage;
