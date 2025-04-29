import API from "../lib/axios";

export const createSurplusDonationAPI = (payload) =>
  API.post("/api/donations/surplus/donate-surplus", payload);

export const getSurplusDonationsAPI = () => API.get("/api/donations/surplus");

export const getMySurplusDonationsAPI = () =>
  API.get("/api/donations/surplus/my");

export const updateSurplusDonationAPI = (id, payload) =>
  API.patch(`/api/donations/surplus/${id}`, payload);

export const deleteSurplusDonationAPI = (id) =>
  API.delete(`/api/donations/surplus/${id}`);

export const getSurplusDonationByIdAPI = (id) =>
  API.get(`/api/donations/surplus/${id}`);
