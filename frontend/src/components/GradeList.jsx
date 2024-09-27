import React, { useState, useEffect } from "react";
import { getGrades } from "../services/gradeService";
import { format, parseISO } from "date-fns";

function GradeList({ studentId, classId }) {
  const [grades, setGrades] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    getGrades(studentId, classId)
      .then((data) => {
        const sortedGrades = sortGradesByDate(data);
        setGrades(sortedGrades);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [studentId, classId]);

  const sortGradesByDate = (gradesList) => {
    return [...gradesList].sort(
      (a, b) =>
        parseISO(b.date_added).getTime() - parseISO(a.date_added).getTime()
    );
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, "dd/MM/yyyy");
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAdd = () => {
    console.log("Add grade");
  };

  const handleEdit = (gradeId) => {
    console.log("Edit grade", gradeId);
  };

  const handleDelete = (gradeId) => {
    console.log("Delete grade", gradeId);
  };

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Grades</h4>
        <div>
          <button className="btn btn-success btn-sm me-2" onClick={handleAdd}>
            Add
          </button>
          <button
            className={`btn btn-${isExpanded ? "secondary" : "primary"} btn-sm`}
            onClick={toggleExpand}
          >
            {isExpanded ? "Hide" : "Show"}
          </button>
        </div>
      </div>
      {grades.length > 0 ? (
        <div className={`list-group ${isExpanded ? "" : "collapse"}`}>
          {grades.map((grade, index) => (
            <div
              key={index}
              className="list-group-item list-group-item-action p-2"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div
                  className="d-flex align-items-center"
                  style={{ width: "70%" }}
                >
                  <span className="fw-medium me-3" style={{ width: "100px" }}>
                    {formatDate(grade.date_added)}
                  </span>
                  <span
                    className="badge bg-primary"
                    style={{ width: "70px", textAlign: "center" }}
                  >
                    {grade.grade}/10
                  </span>
                </div>
                <div>
                  <button
                    className="btn btn-outline-secondary btn-sm me-2"
                    onClick={() => handleEdit(grade.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(grade.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
              {grade.observation && (
                <div className="mt-2 text-muted" style={{ fontSize: "0.9em" }}>
                  <strong>Observation:</strong> {grade.observation}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted">No grades available</p>
      )}
    </div>
  );
}

export default GradeList;
