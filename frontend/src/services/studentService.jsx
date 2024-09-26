import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getStudents = async (class_id) => {
  try {
    const response = await axios.get(`${API_URL}students/${class_id}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};

export const addStudent = async (student, class_id) => {
  try {
    const response = await axios.post(
      `${API_URL}students/${class_id}`,
      student
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};

export const deleteStudent = async (student_id, class_id) => {
  try {
    const response = await axios.delete(
      `${API_URL}students/${class_id}/${student_id}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};
