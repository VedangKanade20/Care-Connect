import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import monetaryDonationReducer from "./monetaryDonationSlice";
import surplusDonationReducer from "./surplusDonationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    monetaryDonation: monetaryDonationReducer,
    surplusDonation: surplusDonationReducer,
  },
});

export default store;
