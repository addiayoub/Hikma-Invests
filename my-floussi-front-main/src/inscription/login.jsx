import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/imgs/logo/logo-v2.svg";
import { loginUser } from "../services/authService.js";
import { useAuth } from "../context/AuthContext.jsx";
import GoogleLoginButton from "./GoogleLoginButton.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loginAndRedirect } = useAuth();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = (e) => {
    e.preventDefault();
    let valid = true;

    // Reset errors
    setEmailError("");
    setPasswordError("");

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    // Password validation
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long.");
      valid = false;
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setEmailError("");
    // setPasswordError("");
    if (!validateForm(e)) {
      return;
    }
    try {
      const userData = {
        email: email,
        password: password,
      };
      const response = await loginUser(userData);
      loginAndRedirect(response);

    } catch (error) {
      console.error("login failed:", error);
      if (error.message === "Password incorrect") {
        setPasswordError("Password incorrect");
      } else if (error.message === "Email not found") {
        handleSubmit;
        setEmailError("Email not found");
      } else {
        console.log("This is the error");
        console.log(error.message);
        setEmailError("An unexpected error occurred");
        setPasswordError("An unexpected error occurred");
      }
    }
  };

  return (
    <section className="bg-white my-10">
      <div className="flex items-center justify-center min-h-screen px-6 mx-auto">
        <div>
          <form className="w-full max-w-md" onSubmit={handleSubmit}>
            <Link to="/">
              <img className="h-24 w-36" src={logo} alt="Your Company" />
            </Link>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl">
              Se Connecter
            </h1>

            <div className="relative flex flex-col mt-8">
              <span className="absolute left-3 top-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>

              <input
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && (
                <p className="mt-2 text-red-500 text-sm">{emailError}</p>
              )}
            </div>

            <div className="relative flex flex-col mt-4">
              <span className="absolute left-3 top-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type={showPassword ? "text" : "password"}
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-gray-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </span>

              {passwordError && (
                <p className="mt-2 text-red-500 text-sm">{passwordError}</p>
              )}
            </div>
            <div>
              <button
                type={"submit"}
                className="mt-6 flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-600 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
              >
                <span>se connecter</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 rtl:-scale-x-100"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className="">
            <p className="mt-4 text-center text-gray-600">
              ou connectez-vous avec
            </p>
            <div
                className="flex items-center w-full justify-center px-6 py-3 transition-colors duration-300 transform"
            >
              <GoogleLoginButton/>

            </div>
            <div className="text-center">
              <Link
                  to="/sign-up "
                  className="text-sm text-blue-500 hover:underline"
              >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Vous n'avez pas encore de compte? S'inscrire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
