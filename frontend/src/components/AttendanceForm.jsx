import React from "react";

function AttendanceForm({
  text,
  handleSubmit,
  newAttendance,
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
            id="date"
            name="date"
            value={formatDateForInput(newAttendance.date)}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">
            Status
          </label>
          <select
            className="form-select"
            id="status"
            name="status"
            value={newAttendance.status}
            onChange={handleChange}
          >
            <option value="Present">Present</option>
            <option value="Late">Late</option>
            <option value="Absent">Absent</option>
          </select>
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

export default AttendanceForm;
