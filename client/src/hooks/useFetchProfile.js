import { useDispatch, useSelector } from "react-redux";
import { fetchProfile } from "../store/authSlice";

export function useFetchProfile() {
  const dispatch = useDispatch();
  const { authUser, loading, error } = useSelector((state) => state.auth);

  const getProfile = () => {
    dispatch(fetchProfile());
  };

  return {
    authUser,
    loading,
    error,
    getProfile,
  };
}
