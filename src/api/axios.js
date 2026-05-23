import axios from "axios";

/**
 * Merkezi axios instance.
 * Tüm dış servis çağrıları bu instance üzerinden yapılır.
 */
const api = axios.create({
  baseURL: "https://reqres.in/api",
  timeout: 10_000,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": "reqres-free-v1",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("[API ERROR]", error?.message ?? error);
    return Promise.reject(error);
  }
);

export default api;
