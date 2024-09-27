import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getGrades = async (student_id, class_id) => {
  try {
    const response = await axios.get(
      `${API_URL}grades/${student_id}/${class_id}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};

export const deleteGrade = async (gradeId) => {
  try {
    const response = await axios.delete(`${API_URL}grades/${gradeId}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};
