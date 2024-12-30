import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/imgs/logo/logo-v2.svg";
import { registerUser } from "../services/authService.js";
import { setMessage, setShowPopup } from "../redux/slices/popupSlice.js";
import { useDispatch } from "react-redux";
import GoogleLoginButton from "./GoogleLoginButton.jsx";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateForm = (e) => {
    e.preventDefault();
    let valid = true;

    setEmailError("");
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    }

    setUsernameError("");
    if (!username) {
      setUsernameError("Username is required");
      valid = false;
    }

    setPasswordError("");
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }

    setConfirmPasswordError("");
    if (!confirmPassword) {
      setConfirmPasswordError("Confirmation Password is required");
      valid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      valid = false;
    }

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password && !passwordPattern.test(password)) {
      setPasswordError(
        "Your password must meet the following criteria:\n\n" +
          "- At least 8 characters long\n- Contains at least one uppercase letter\n" +
          "- Contains at least one lowercase letter\n- Includes at least one number\n" +
          "- Has at least one special character (@, $, !, %, *, ?, &)\n\nPlease adjust" +
          " your password accordingly.",
      );
      valid = false;
    }
    return valid;
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // how can I use this
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm(e)) {
      return;
    }
    try {
      const userData = {
        name: username,
        email: email,
        password: password,
        password2: confirmPassword,
      };
      await registerUser(userData);
      // Redirect to login page
      navigate("/login");
      dispatch(
        setMessage(
          "Votre compte a été créé avec succès ! Bienvenue à Hikma Invest.",
        ),
      );
      dispatch(setShowPopup(true));
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <section className="bg-white my-10">
      <div className="w-full max-w-md min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <Link to="/">
            <img className="h-24 w-36" src={logo} alt="Your Company" />
          </Link>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            S'inscrire
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
                className="w-6 h-6 text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </span>
            <input
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg pl-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && (
              <p className="mt-2 text-red-500 text-sm">{usernameError}</p>
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
              type={showConfirmPassword ? "text" : "password"}
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={handleToggleConfirmPassword}
            >
              {showConfirmPassword ? (
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
            {confirmPasswordError && (
              <p className="mt-2 text-red-500 text-sm">
                {confirmPasswordError}
              </p>
            )}
          </div>

          <div className="mt-6">
            <button className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-cyan-600 rounded-lg hover:bg-cyan-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <span>S'inscrire</span>
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

        <div>
          <p className="mt-4 text-center text-gray-600">ou inscrivez-vous avec</p>
          <div
              className="flex items-center w-full justify-center px-6 py-3 transition-colors duration-300 transform"
          >
            <GoogleLoginButton/>

          </div>
        </div>

        <div className="text-center">
          <Link to="/login" className="text-sm text-blue-500 hover:underline">
            Vous avez déjà un compte? Se connecter
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
