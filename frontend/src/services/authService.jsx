import axios from "axios";
import useUserStore from "../stores/useUserStore";

const API_URL = import.meta.env.VITE_API_URL;

export const login = async (data) => {
  try {
    const response = await axios.post(`${API_URL}users/login`, data);
    const user = response.data.user;

    useUserStore.getState().setUser(user);
    localStorage.setItem("user", JSON.stringify(user));

    return response.data;
  } catch (err) {
    console.log(err);
    throw err.response?.data?.message || "Registration failed";
  }
};

export const register = async (data) => {
  try {
    const response = await axios.post(`${API_URL}users/register`, data);
    const user = response.data.user;
    useUserStore.getState().setUser(user);
    localStorage.setItem("user", JSON.stringify(user));

    return response.data;
  } catch (err) {
    console.log(err);
    throw err.response?.data?.message || "Registration failed";
  }
};
