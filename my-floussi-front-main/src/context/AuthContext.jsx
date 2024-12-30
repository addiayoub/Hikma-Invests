import {createContext, useContext, useEffect, useState} from "react";
import { jwtDecode } from "jwt-decode";
import {useNavigate} from "react-router-dom";
import {setAuthData} from "../redux/slices/authSlice.js";
import {useDispatch} from "react-redux";

const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    const storedLoginData = localStorage.getItem("loginData");
    if (storedLoginData) {
      const parsedData = JSON.parse(storedLoginData);
      login(parsedData.token);
    }
  }, []);

  const login = (token) => {
    setIsAuthenticated(true);
    const decodedToken = tokenDecoder(token);
    setUser(decodedToken);
    setToken(token);
    localStorage.setItem("loginData", JSON.stringify({ token }));
  };

  const tokenDecoder = (token) => {
    return jwtDecode(token);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setToken(null);
    localStorage.removeItem("loginData");
  };

  const loginAndRedirect = (response) => {
    login(response);
    const decodedToken = jwtDecode(response);
    const token = response.split(" ")[1];
    dispatch(setAuthData({ token, userId: decodedToken.id }));
    if (decodedToken.role === "admin") {
      navigate("/dashboard");
    } else {
      navigate(`/${decodedToken.id}/questionnaires`);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, user, token, login, logout, loginAndRedirect }}
    >
      {children}
    </AuthContext.Provider>
  );
};
