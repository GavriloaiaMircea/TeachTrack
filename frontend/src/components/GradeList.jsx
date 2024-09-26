import React from "react";

function GradeList({ grades }) {
  return (
    <div className="mt-2">
      <h4 className="text-lg font-semibold mb-2">Grades</h4>
      {grades.length > 0 ? (
        <ul className="space-y-1">
          {grades.map((grade, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{grade.date}</span>
              <span className="font-bold">{grade.value}/10</span>
              {grade.observations && (
                <span className="text-sm text-gray-600">
                  {grade.observations}
                </span>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No grades available</p>
      )}
    </div>
  );
}

export default GradeList;
