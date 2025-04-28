import { useDispatch, useSelector } from "react-redux";
import { register } from "../store/authSlice";

function useRegister() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const registerUser = (payload) => {
    return dispatch(register(payload));
  };

  return {
    registerUser,
    loading,
    error,
  };
}

export default useRegister;
