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

const router = express.Router();

router.post("/monetary", protect, restrictToDonor, createMonetaryDonation);
router.get(
  "/monetary",
  protect,
  restrictToAdminAndNGOStaff,
  getMonetaryDonation
);
router.get(
  "/monetary/:id",
  protect,
  restrictToAdminAndNGOStaff,
  getMonetaryDonationById
);
router.get("/monetary/mine", protect, restrictToDonor, getMyMonetaryDonations);

export default router;
