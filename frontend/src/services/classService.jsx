import axios from "axios";
import useUserStore from "../stores/useUserStore";

const API_URL = import.meta.env.VITE_API_URL;

export const getClasses = async () => {
  try {
    const teacher_id = useUserStore.getState().user.id;
    const response = await axios.get(`${API_URL}classes/${teacher_id}`);
    return response.data.classes;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};

export const addClass = async (data) => {
  try {
    const response = await axios.post(`${API_URL}classes`, data);
    return response.data;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};

export const deleteClass = async (class_id) => {
  try {
    const response = await axios.delete(`${API_URL}classes/${class_id}`);
    return response.data;
  } catch (err) {
    console.error(err);
    return { message: "Internal server error" };
  }
};
