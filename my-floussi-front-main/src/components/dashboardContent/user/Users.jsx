import { useAuth } from "../../../context/AuthContext.jsx";
import { useEffect, useState } from "react";
import { fetchAllUsersByRoleUser } from "../../../services/userService.js";
import UserDisplay from "./UserDisplay.jsx";

const Users = () => {
  const { token } = useAuth();
  const [users, setUsers] = useState(0);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await fetchAllUsersByRoleUser(token);
        setUsers(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, [token]);
  return <UserDisplay users={users} />;
};

export default Users;
