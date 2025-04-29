import API from "../lib/axios";

export const createMonetaryDonationAPI = (payload) =>
  API.post("/api/donations/monetary/", payload);

export const getMonetaryDonationsAPI = () =>
  API.get("/api/donations/monetary/get-donation");

export const getMyMonetaryDonationsAPI = () =>
  API.get("/api/donations/monetary/my-donation");

export const getMonetaryDonationByIdAPI = (id) =>
  API.get(`/api/donations/monetary/get-donationById/${id}`);
