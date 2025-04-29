import API from "../lib/axios";

export const createSurplusDonationAPI = (payload) =>
  API.post("/api/donations/surplus/donate-surplus", payload); //done

export const getSurplusDonationsAPI = () =>
  API.get("/api/donations/surplus/get-donations");

export const getMySurplusDonationsAPI = () =>
  API.get("/api/donations/surplus/my-donations"); //done

export const updateSurplusDonationAPI = (id, payload) =>
  API.patch(`/api/donations/surplus/${id}`, payload);

export const deleteSurplusDonationAPI = (id) =>
  API.delete(`/api/donations/surplus/${id}`);

export const getSurplusDonationByIdAPI = (id) =>
  API.get(`/api/donations/surplus/get-donationById/${id}`);
