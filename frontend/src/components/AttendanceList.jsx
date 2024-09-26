import React, { useEffect } from "react";
import { getAttendance } from "../services/attendanceService";
import { format } from "date-fns";

function AttendanceList({ classId, studentId }) {
  const [attendance, setAttendance] = React.useState([]);

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
        return "badge bg-success";
      case "Late":
        return "badge bg-warning text-dark";
      case "Absent":
        return "badge bg-danger";
      default:
        return "badge bg-secondary";
    }
  };

  return (
    <div className="mt-2">
      <h4 className="mb-2">Attendance</h4>
      {attendance && attendance.length > 0 ? (
        <ul className="list-group">
          {attendance.map((record, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <span className="fw-medium">
                {format(new Date(record.date), "dd/MM/yyyy")}
              </span>
              <span className={getStatusColor(record.status)}>
                {record.status}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">No attendance records available</p>
      )}
    </div>
  );
}

export default AttendanceList;
