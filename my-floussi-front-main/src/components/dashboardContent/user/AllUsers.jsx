import UserDisplay from "./UserDisplay.jsx";
import { useAuth } from "../../../context/AuthContext.jsx";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "../../../services/userService.js";

const AllUsers = () => {
    const { token } = useAuth();
    const [users, setUsers] = useState(0);

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const users = await fetchAllUsers(token);
                setUsers(users);
            } catch (error) {
                console.error("Error fetching questionnaire count:", error);
            }
        };

        getAllUsers();
    }, [token]);
    return <UserDisplay users={users} />;
};
export default AllUsers;
