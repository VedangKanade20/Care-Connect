import { useDispatch, useSelector } from "react-redux";
import {
  createMonetaryDonation,
  fetchMonetaryDonations,
  fetchMyMonetaryDonations,
} from "../store/monetaryDonationSlice";

export function useMonetaryDonation() {
  const dispatch = useDispatch();
  const { monetaryDonations, myMonetaryDonations, loading, error } =
    useSelector((state) => state.monetaryDonation);

  const createDonation = (payload) => {
    return dispatch(createMonetaryDonation(payload));
  };

  const getAllMonetaryDonations = () => {
    return dispatch(fetchMonetaryDonations());
  };

  const getMyMonetaryDonations = () => {
    return dispatch(fetchMyMonetaryDonations());
  };

  return {
    monetaryDonations,
    myMonetaryDonations,
    loading,
    error,
    createDonation,
    getAllMonetaryDonations,
    getMyMonetaryDonations,
  };
}
