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

export const addGrade = async (student_id, class_id, grade) => {
  try {
    const response = await axios.post(
      `${API_URL}grades/${student_id}/${class_id}`,
      grade
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};

export const getGradeById = async (gradeId) => {
  try {
    const response = await axios.get(`${API_URL}grades/${gradeId}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};

export const updateGrade = async (gradeId, grade) => {
  try {
    const response = await axios.put(`${API_URL}grades/${gradeId}`, grade);
    return response.data;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};
