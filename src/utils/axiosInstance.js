import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://tiktok.fullstack.edu.vn/api/",
});

export const get = async (url, options = {}) => {
  try {
    const response = await axiosInstance.get(url, options);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const post = async (url, data, options = {}) => {
  const response = await axiosInstance.post(url, data, options);
  return response.data;
};

axiosInstance.interceptors.request.use(function (config) {
  const token =
    "Bearer " + JSON.parse(localStorage.getItem("user"))?.meta.token;
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});
