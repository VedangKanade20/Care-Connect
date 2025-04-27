import API from "../lib/axios";

export const loginAPI = (payload) => API.post("/api/users/login", payload);

export const registerAPI = (payload) => API.post("/api/users/register", payload);

export const fetchProfileAPI = () => API.get("/api/users/user-details") 

export const updateProfileAPI = (payload) => API.put("/api/users/update-user", payload);

export const fetchAllUsersAPI = () => API.get("/api/users/get-allUsers");

export const logoutAPI = () => API.get("/api/users/logout");
