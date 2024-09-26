import React, { useEffect, useState } from "react";
import { getAttendance, deleteAttendance } from "../services/attendanceService";
import { format } from "date-fns";

function AttendanceList({ classId, studentId }) {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    getAttendance(studentId, classId)
      .then((data) => {
        setAttendance(data.attendance || []);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [classId, studentId]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Present":
        return "success";
      case "Late":
        return "warning";
      case "Absent":
        return "danger";
      default:
        return "secondary";
    }
  };

  const handleDelete = (id) => {
    deleteAttendance(id)
      .then((data) => {
        if (data.message === "Attendance deleted") {
          setAttendance(attendance.filter((record) => record.id !== id));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="mt-4">
      <h4 className="mb-3">Attendance</h4>
      {attendance && attendance.length > 0 ? (
        <div className="list-group">
          {attendance.map((record, index) => (
            <div
              key={index}
              className="d-flex justify-content-between align-items-center p-2"
            >
              <div className="d-flex align-items-center flex-grow-1">
                <span className="fw-medium me-3">
                  {format(new Date(record.date), "dd/MM/yyyy")}
                </span>
                <span className={`badge bg-${getStatusColor(record.status)}`}>
                  {record.status}
                </span>
              </div>
              <button
                className="btn btn-outline-danger btn-sm ms-2"
                onClick={() => handleDelete(record.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted">No attendance records available</p>
      )}
    </div>
  );
}

export default AttendanceList;
