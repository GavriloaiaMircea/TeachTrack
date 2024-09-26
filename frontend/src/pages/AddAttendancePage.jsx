import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddAttendancePage() {
  const [newAttendance, setNewAttendance] = useState({
    date: "",
    status: "Present",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const today = new Date();
    const formattedDate = formatDateForInput(today);
    setNewAttendance((prev) => ({ ...prev, date: formattedDate }));
  }, []);

  const formatDateForInput = (date) => {
    return date.toISOString().split("T")[0];
  };

  const formatDateForDisplay = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${day}/${month}/${year}`;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "date") {
      setNewAttendance((prev) => ({
        ...prev,
        [id]: formatDateForInput(new Date(value)),
      }));
    } else {
      setNewAttendance((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionData = {
      ...newAttendance,
      date: formatDateForDisplay(newAttendance.date),
    };
    console.log(submissionData);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Attendance</h2>
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
            value={newAttendance.date}
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
            onClick={() => navigate(`/class/${id}`)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddAttendancePage;
