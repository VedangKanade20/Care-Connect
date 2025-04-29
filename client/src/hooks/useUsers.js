import { useEffect, useState } from "react";
import { fetchAllUsersAPI } from "../services/authService";

export function useUsers() {
  const [deliveryUsers, setDeliveryUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDeliveryUsers = async () => {
    setLoading(true);
    try {
      const res = await fetchAllUsersAPI();
      const users = res.data;

      const deliveryOnly = users.filter(
        (user) => user.role === "NGO_Staff" && user.staffType === "delivery"
      );
      setDeliveryUsers(deliveryOnly);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDeliveryUsers();
  }, []);

  return { deliveryUsers, loading };
}
