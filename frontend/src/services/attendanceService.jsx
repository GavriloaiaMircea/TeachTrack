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

export const deleteAttendance = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}attendance/${id}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};

export const addAttendance = async (classId, studentId, data) => {
  try {
    const response = await axios.post(
      `${API_URL}attendance/${studentId}/${classId}`,
      data
    );
    return response.data;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};

export const getAttendanceById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}attendance/${id}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};

export const updateAttendance = async (data) => {
  try {
    const response = await axios.put(`${API_URL}attendance`, data);
    return response.data;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};
