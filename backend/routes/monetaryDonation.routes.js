import express from "express";
import {
  createMonetaryDonation,
  getMonetaryDonation,
  getMonetaryDonationById,
  getMyMonetaryDonations,
} from "../controllers/monetaryDonation.controller.js";
import {
  protect,
  restrictToDonor,
  restrictToAdminAndNGOStaff,
} from "../middlewares/user.middleware.js";

const monetaryDonationRouter = express.Router();

monetaryDonationRouter.post(
  "/donate-money",
  protect,
  restrictToDonor,
  createMonetaryDonation
);
monetaryDonationRouter.get(
  "/get-donation",
  protect,
  restrictToAdminAndNGOStaff,
  getMonetaryDonation
);
monetaryDonationRouter.get(
  "/get-donationById",
  protect,
  restrictToAdminAndNGOStaff,
  getMonetaryDonationById
);
monetaryDonationRouter.get(
  "/my-donation",
  protect,
  restrictToDonor,
  getMyMonetaryDonations
);
export default monetaryDonationRouter;
