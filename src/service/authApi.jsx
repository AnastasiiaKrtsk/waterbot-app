import axios from "axios";

const BASE_URL = "https://"; // added URL
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
