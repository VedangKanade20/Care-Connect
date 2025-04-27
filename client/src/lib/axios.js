import axios from "axios";

//an axios instance

const API = axios.create({
  baseURL: "http://localhost:9000",
  withCredentials: true,
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
