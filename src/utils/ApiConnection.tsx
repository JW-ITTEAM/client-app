import axios from "axios";
import { FMS_API_URL } from "../config/SystemConfig";

const axiosConn = axios.create({
  baseURL: FMS_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
});

axiosConn.defaults.timeout = 3000;

axiosConn.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosConn.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosConn;
