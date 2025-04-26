import express from "express";
import {
  createSurplusDonation,
  getSurplusDonation,
  getSurplusDonationById,
  getMySurplusDonations,
  updateSurplusDonation,
  deleteSurplusDonation,
} from "../controllers/surplusDonation.controller.js";
import {
  protect,
  restrictToDonor,
  restrictToAdminAndNGOStaff,
  restrictToNGOStaff,
  restrictToAdmin,
} from "../middlewares/user.middleware.js";

const surplusDonationRouter = express.Router();

surplusDonationRouter.post(
  "/donate-surplus",
  protect,
  restrictToDonor,
  createSurplusDonation
);
surplusDonationRouter.get(
  "/get-donations",
  protect,
  restrictToAdminAndNGOStaff,
  getSurplusDonation
);
surplusDonationRouter.get(
  "/get-donationById/:id",
  protect,
  restrictToAdminAndNGOStaff,
  getSurplusDonationById
);
surplusDonationRouter.get(
  "/my-donations",
  protect,
  restrictToDonor,
  getMySurplusDonations
);
surplusDonationRouter.put(
  "/update-donation/:id",
  protect,
  restrictToDonor,
  updateSurplusDonation
);
surplusDonationRouter.delete(
  "/delete-donation",
  protect,
  restrictToAdmin,
  deleteSurplusDonation
);

export default surplusDonationRouter;
