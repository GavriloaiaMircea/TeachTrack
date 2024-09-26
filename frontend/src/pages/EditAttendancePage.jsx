import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AttendanceForm from "../components/AttendanceForm";
import {
  getAttendanceById,
  updateAttendance,
} from "../services/attendanceService";

function EditAttendancePage() {
  const { attendanceId, id } = useParams();
  const [attendance, setAttendance] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    getAttendanceById(attendanceId)
      .then((data) => {
        setAttendance({
          ...data.attendance,
          date: new Date(data.attendance.date).toISOString().split("T")[0],
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [attendanceId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAttendance(attendance)
      .then(() => {
        navigate(`/class/${id}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAttendance({ ...attendance, [id]: value });
  };

  const handleCancel = () => {
    navigate(`/class/${id}`);
  };

  return (
    <AttendanceForm
      text={"Edit Attendance"}
      newAttendance={attendance}
      handleCancel={handleCancel}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default EditAttendancePage;
