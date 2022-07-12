import axios from "axios";
import auth from "./auth.service";
import { API_URL } from "../utils/apiUrl";

export const backend = axios.create({
  baseURL: `${API_URL["dev"]}`,
});

backend.interceptors.request.use((config) => {
  const token = localStorage.getItem("api_token") ?? auth();
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
