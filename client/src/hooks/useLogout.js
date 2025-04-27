import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

export function useLogout() {
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  };

  return { logoutUser };
}
