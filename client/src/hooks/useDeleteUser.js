/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { deleteUserAPI } from "../services/api";
import { toast } from "react-toastify";

export function useDeleteUser() {
  const dispatch = useDispatch();

  const deleteUser = async (userId) => {
    try {
      await deleteUserAPI(userId);
      toast.success("User deleted successfully");
      // Optionally, refresh the user list or redirect
    } catch (error) {
      toast.error("Failed to delete user");
    }
  };

  return { deleteUser };
}
