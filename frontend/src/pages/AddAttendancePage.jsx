import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addAttendance } from "../services/attendanceService";
import { sub } from "date-fns";
import AttendanceForm from "../components/AttendanceForm";

function AddAttendancePage() {
  const [newAttendance, setNewAttendance] = useState({
    date: "",
    status: "Present",
  });
  const navigate = useNavigate();
  const { id, studentId } = useParams();

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

    addAttendance(id, studentId, submissionData)
      .then(() => {
        navigate(`/class/${id}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <AttendanceForm
      text={"Add Attendance"}
      handleSubmit={handleSubmit}
      newAttendance={newAttendance}
      handleChange={handleChange}
      handleCancel={() => navigate(`/class/${id}`)}
    />
  );
}

export default AddAttendancePage;
