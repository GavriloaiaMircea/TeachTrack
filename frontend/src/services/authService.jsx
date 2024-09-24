import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (data) => {
  try {
    const response = await axios.post(`${API_URL}users/login`, data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err.response?.data?.message || "Registration failed";
  }
};

export const register = async (data) => {
  try {
    const response = await axios.post(`${API_URL}users/register`, data);
    return response.data;
  } catch (err) {
    console.log(err);
    throw err.response?.data?.message || "Login failed";
  }
};
