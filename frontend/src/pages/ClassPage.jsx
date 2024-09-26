import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getClassById } from "../services/classService";

function ClassPage() {
  const [classData, setClassData] = useState({
    class_name: "",
    subject: "",
    school_year: "",
  });
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
  }, [id]);

  return (
    <div>
      <h1>{classData.class_name}</h1>
      <button className="btn btn-primary" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
}

export default ClassPage;
