import { default as axios } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:5000/",
  timeout: 5000,
  silent: true
});

export default axiosInstance;
