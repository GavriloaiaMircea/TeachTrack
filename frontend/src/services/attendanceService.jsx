import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const getAttendance = async (studentId, classId) => {
  try {
    const response = await axios.get(
      `${API_URL}attendance/${studentId}/${classId}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};
