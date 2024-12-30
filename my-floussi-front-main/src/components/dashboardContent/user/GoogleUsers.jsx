import { useAuth } from "../../../context/AuthContext.jsx";
import { useEffect, useState } from "react";
import {fetchAllGoogleUsers} from "../../../services/userService.js";
import UserDisplay from "./UserDisplay.jsx";

const GoogleUsers = () => {
    const { token } = useAuth();
    const [users, setUsers] = useState(0);

    useEffect(() => {
        const getGoogleUsers = async () => {
            try {
                const users = await fetchAllGoogleUsers(token);
                setUsers(users);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        getGoogleUsers();
    }, [token]);
    return <UserDisplay users={users} />;
};

export default GoogleUsers;
