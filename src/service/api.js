import axios from "axios";
// import { longFormatters } from "date-fns";

const BASE_URL = "https://backend-water-tracker.onrender.com/api/";
const $instance = axios.create({ baseURL: BASE_URL });

export const setToken = (token) => {
  $instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export const signup = async (userData) => {
  const { data } = await $instance.post("/auth/signup", userData);
  setToken(data.token);
  return data;
};

export const signin = async (userData) => {
  const { data } = await $instance.post("/auth/signin", userData);
  setToken(data.token);
  return data;
};

export const logout = async () => {
  const { data } = await $instance.post("/auth/logout");
  setToken("");

  return data;
};

export const currentUser = async () => {
  const { data } = await $instance.get("/users/current");
  return data;
};

export const updateAvatar = async (data) => {
  try {
    const response = await $instance.patch("/users/avatars", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating avatar:", error.message);
    console.error("Error details:", error);
    throw error;
  }
};

export const updateUserInfo = async (data) => {
  const response = await $instance.patch("/users/update", data);
  return response.data;
};

//WaterQuery

export const getWater = async () => {
  const { data } = await $instance.get("/water/");
  return data;
};

export const addWater = async (water) => {
  const { data } = await $instance.post("/water/", water);
  return data;
};

export const editWater = async ({ id, water }) => {
  const { data } = await $instance.patch(`/water/${id}`, water);
  return data;
};

export const deleteWater = async (id) => {
  const { data } = await $instance.delete(`/water/${id}`);
  return { id, data };
};

//*dailyNorma
export const editDailyNorma = async (water) => {
  const { data } = await $instance.patch("/users/dailynorm", water);
  console.log(data);
  return data;
};
// editDailyNorma();

export const forgotPassword = async (email) => {
  const { data } = await $instance.post("auth/forgot-password", email);
  return data;
};

export const updatePassword = async (newPassword) => {
  const { data } = await $instance.post("auth/update-password", newPassword);
};
