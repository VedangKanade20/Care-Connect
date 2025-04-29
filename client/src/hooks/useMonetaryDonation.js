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

  const createDonation = (payload) => dispatch(createMonetaryDonation(payload));

  const getAllMonetaryDonations = () => dispatch(fetchMonetaryDonations());

  const getMyMonetaryDonations = () => dispatch(fetchMyMonetaryDonations());

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
