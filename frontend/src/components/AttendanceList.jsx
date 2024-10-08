import React, { useEffect, useState } from "react";
import { getAttendance, deleteAttendance } from "../services/attendanceService";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

function AttendanceList({ classId, studentId }) {
  const [attendance, setAttendance] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
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

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0">Attendance</h4>
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
      {isExpanded && (
        <>
          {attendance && attendance.length > 0 ? (
            <div className="list-group">
              {attendance.map((record, index) => (
                <div
                  key={index}
                  className="list-group-item list-group-item-action p-2"
                >
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                    <div
                      className="d-flex flex-column flex-md-row align-items-start align-items-md-center mb-2 mb-md-0"
                      style={{ width: "100%" }}
                    >
                      <span
                        className="fw-medium me-md-3 mb-1 mb-md-0"
                        style={{ minWidth: "100px" }}
                      >
                        {format(parseISO(record.date), "dd/MM/yyyy")}
                      </span>
                      <span
                        className={`badge bg-${getStatusColor(
                          record.status
                        )} mb-1 mb-md-0`}
                        style={{ minWidth: "70px", textAlign: "center" }}
                      >
                        {record.status}
                      </span>
                    </div>
                    <div className="mt-2 mt-md-0">
                      <button
                        className="btn btn-outline-secondary btn-sm me-2 mb-1 mb-md-0"
                        onClick={() =>
                          navigate(
                            `/class/${classId}/${studentId}/edit-attendance/${record.id}`
                          )
                        }
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDelete(record.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted">No attendance records available</p>
          )}
        </>
      )}
    </div>
  );
}

export default AttendanceList;
