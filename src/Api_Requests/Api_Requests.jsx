import axios from "axios";

export const api = axios.create({
  baseURL: "https://omandata.up.railway.app",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    // token: userToken,
  },
});

export const apiForImage = axios.create({
  baseURL: "https://omandata.up.railway.app",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    // token: userToken,
  },
});

// Auth Requests
export const LoginUserApi = (payload) => api.post("/login", payload);
export const RegisterUserApi = (payload) => api.post("/register", payload);

//   Records Requests
export const AddUserAPI = (payload) => api.post("/users", payload);
export const GetUsersAPI = () => api.get("/users");
export const GetUserByIdAPI = () => api.get("/users/" + id);
