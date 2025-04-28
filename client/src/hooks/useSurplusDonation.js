import { useDispatch, useSelector } from "react-redux";
import {
  createSurplusDonation,
  fetchMySurplusDonations,
  fetchSurplusDonations,
} from "../store/surplusDonationSlice";

export function useSurplusDonation() {
  const dispatch = useDispatch();
  const { surplusDonations, mySurplusDonations, loading, error } = useSelector(
    (state) => state.surplusDonation
  );

  const createDonation = (payload) => {
    return dispatch(createSurplusDonation(payload));
  };

  const getAllSurplusDonation = () => {
    return dispatch(fetchSurplusDonations());
  };

  const getMySurplusDonations = () => {
    return dispatch(fetchMySurplusDonations());
  };
  return {
    surplusDonations,
    mySurplusDonations,
    loading,
    error,
    createDonation,
    getAllSurplusDonation,
    getMySurplusDonations,
  };
}
