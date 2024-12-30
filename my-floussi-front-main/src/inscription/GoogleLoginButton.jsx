import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext.jsx";
import {loginWithGoogle} from "../services/authService.js";

const CLIENT_ID = '354232428914-odqjbo39l4eqpta48h6gvda5oujv0neh.apps.googleusercontent.com';

const GoogleLoginButton = () => {
    const { loginAndRedirect } = useAuth();

    const handleGoogleLogin = async (googleData) => {
        try {
            const token = await loginWithGoogle(googleData.credential);
            loginAndRedirect(token);
        } catch (error) {
            console.error("Error logging in with Google:", error);
        }
    };

    return (
        <GoogleOAuthProvider clientId={CLIENT_ID}>
            <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => console.log('Login Failed')}
            />
        </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;