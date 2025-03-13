import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl ="https://fce46a47-ef26-48db-a34e-6ef557d6db01-dev.e1-eu-north-azure.choreoapis.dev/django-react/backend/v1.0/";


const api = axios.create({
  baseURL: apiUrl
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
