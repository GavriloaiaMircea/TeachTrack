import React from "react";
import GradeList from "./GradeList";
import AttendanceList from "./AttendanceList";

function StudentList({ students, onDelete }) {
  const sortedStudents = [...students].sort((a, b) => {
    const lastNameComparison = a.last_name.localeCompare(b.last_name);
    if (lastNameComparison !== 0) {
      return lastNameComparison;
    }
    return a.first_name.localeCompare(b.first_name);
  });

  return (
    <div className="container-fluid px-4">
      <h2 className="text-2xl font-bold mb-4 mt-3">Students</h2>
      {sortedStudents.length > 0 ? (
        <div className="row g-4">
          {sortedStudents.map((student) => (
            <div key={student.id} className="col-12 col-md-6 col-lg-4">
              <div
                className="bg-light shadow-sm rounded p-4 h-100"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="text-lg font-semibold">
                    {student.last_name}, {student.first_name}
                  </h3>
                  <button
                    onClick={() => onDelete(student.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>
                <div className="col-12 col-sm-6 mb-3 mb-sm-0 row">
                  <GradeList grades={student.grades || []} />
                </div>
                <div className="col-12 col-sm-6 row">
                  <AttendanceList attendance={student.attendance || []} />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-muted">No students found</p>
      )}
    </div>
  );
}

export default StudentList;
