import axios from 'axios';
export const BASE_URL = 'http://localhost:4000/api/';

const baseAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization':'Bearer ' + window.localStorage.getItem("token"),
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
baseAxios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

baseAxios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return error.response;
  },
);

export default baseAxios;