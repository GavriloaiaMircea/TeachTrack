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
