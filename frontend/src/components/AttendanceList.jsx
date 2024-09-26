import React, { useEffect, useState } from "react";
import { getAttendance, deleteAttendance } from "../services/attendanceService";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

function AttendanceList({ classId, studentId }) {
  const [attendance, setAttendance] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAttendance(studentId, classId)
      .then((data) => {
        const sortedAttendance = (data.attendance || []).sort(
          (a, b) => parseISO(b.date).getTime() - parseISO(a.date).getTime()
        );
        setAttendance(sortedAttendance);
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

  const handleAdd = () => {
    navigate(`/class/${classId}/${studentId}/add-attendance`);
  };

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Attendance</h4>
        <button className="btn btn-success btn-sm" onClick={handleAdd}>
          Add
        </button>
      </div>
      {attendance && attendance.length > 0 ? (
        <div className="list-group">
          {attendance.map((record, index) => (
            <div
              key={index}
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center p-2"
            >
              <div
                className="d-flex align-items-center"
                style={{ width: "70%" }}
              >
                <span className="fw-medium me-3" style={{ width: "100px" }}>
                  {format(parseISO(record.date), "dd/MM/yyyy")}
                </span>
                <span
                  className={`badge bg-${getStatusColor(record.status)}`}
                  style={{ width: "70px", textAlign: "center" }}
                >
                  {record.status}
                </span>
              </div>
              <button
                className="btn btn-outline-danger btn-sm"
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
