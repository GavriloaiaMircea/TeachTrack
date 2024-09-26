import React from "react";

function StudentList({ students, onDelete }) {
  return (
    <>
      <h2>Students</h2>
      {students.length > 0 ? (
        students.map((student) => (
          <div key={student.id}>
            {student.first_name} {student.last_name}
            <button
              onClick={() => onDelete(student.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No students found</p>
      )}
    </>
  );
}

export default StudentList;
