import React from "react";

function AttendanceList({ attendance }) {
  return (
    <div className="mt-2">
      <h4 className="text-lg font-semibold mb-2">Attendance</h4>
      {attendance.length > 0 ? (
        <ul className="space-y-1">
          {attendance.map((record, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{record.date}</span>
              <span
                className={record.present ? "text-green-600" : "text-red-600"}
              >
                {record.present ? "Present" : "Absent"}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No attendance records available</p>
      )}
    </div>
  );
}

export default AttendanceList;
