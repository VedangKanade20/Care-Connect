import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";

export function useLogin() {
  const dispatch = useDispatch();
  const { loading, error, authUser } = useSelector((state) => state.auth);

  const loginUser = (credentials) => {
    dispatch(login(credentials));
  };

  return {
    loginUser,
    loading,
    error,
    authUser,
  };
}
