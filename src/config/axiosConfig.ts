import axios from "axios";

const { VITE_API_URL } = import.meta.env;

// Check if the environment variable is defined
if (!VITE_API_URL) {
  throw new Error("VITE_API_URL is not defined");
}

// Create an axios instance
const api = axios.create({
  baseURL: `${VITE_API_URL}`,
});

// Request interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

export default api;
