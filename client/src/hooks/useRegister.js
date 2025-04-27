import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/authSlice";

export function useRegister() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const registerUser = (payload) => {
    dispatch(register(payload));
  };

  return {
    registerUser,
    loading,
    error,
  };
}
