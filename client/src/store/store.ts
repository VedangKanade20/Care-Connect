// src/store/store.ts
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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
