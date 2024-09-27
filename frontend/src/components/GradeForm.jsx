import React from "react";

function GradeForm({
  text,
  handleSubmit,
  newGrade,
  handleChange,
  handleCancel,
}) {
  const formatDateForInput = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{text}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            className="form-control"
            id="date_added"
            name="date_added"
            value={formatDateForInput(newGrade.date_added)}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="observation" className="form-label">
            Observation
          </label>
          <input
            type="text"
            className="form-control"
            id="observation"
            name="observation"
            value={newGrade.observation}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="grade" className="form-label">
            Grade
          </label>
          <input
            type="number"
            className="form-control"
            id="grade"
            name="grade"
            min="1"
            max="10"
            step="0.1"
            placeholder="Number between 1 and 10"
            value={newGrade.grade}
            onChange={handleChange}
            required
          />
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default GradeForm;
