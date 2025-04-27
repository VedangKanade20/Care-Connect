import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import monetaryDonationReducer from "./slices/monetaryDonationSlice";
import surplusDonationReducer from "./slices/surplusDonationSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    monetaryDonation: monetaryDonationReducer,
    surplusDonation: surplusDonationReducer,
  },
});
