import UserDisplay from "./UserDisplay.jsx";
import { useAuth } from "../../../context/AuthContext.jsx";
import { useEffect, useState } from "react";
import { fetchAllUsersByRoleAdmin } from "../../../services/userService.js";

const Admins = () => {
  const { token } = useAuth();
  const [admins, setAdmins] = useState(0);

  useEffect(() => {
    const getAdmins = async () => {
      try {
        const admins = await fetchAllUsersByRoleAdmin(token);
        setAdmins(admins);
      } catch (error) {
        console.error("Error fetching questionnaire count:", error);
      }
    };

    getAdmins();
  }, [token]);
  return <UserDisplay users={admins} />;
};
export default Admins;
