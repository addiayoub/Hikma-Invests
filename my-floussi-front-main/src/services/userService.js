// const BASE_URL = "https://my-floussi-back.onrender.com/api";
const BASE_URL = "http://localhost:5000/api";

// fetch all users (users or admins)
export const fetchAllUsers = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch users");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

// fetch user by role admin
export const fetchAllUsersByRoleAdmin = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/role/admin`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch admins");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching admins:", error);
    throw error;
  }
};

// fetch user by role user
export const fetchAllUsersByRoleUser = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/role/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch users");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export const fetchAllGoogleUsers = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/google/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch users");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

