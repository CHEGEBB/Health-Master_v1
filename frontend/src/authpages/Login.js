import React from 'react';
import './Login.scss';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import GoogleIcon from '../images/flat-color-icons--google.svg';
import { Link, useNavigate} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleEmailLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            // Sign in user with email and password
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User logged in successfully');
            navigate('/home'); // Navigate to /home after successful login
        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
            console.log('User logged in with Google successfully');
            navigate('/home'); // Navigate to /home after successful login
        } catch (error) {
            console.error('Error logging in with Google:', error.message);
        }
    };

    return (
        <div className="login-container">
        <div className="log-in">
        <div className="left">
        <h1>HEALTH MASTER</h1>
</div>
            <div className="login-form">
                <h2>Login</h2>
                <p>Or</p>
                <div className="google-signin">
                    <div className="sign-google">
                        <h2>Login with Google</h2>
                    </div>
                    <div className="googlecon">
                        <img src={GoogleIcon} alt="Google Icon" onClick={handleGoogleLogin} />
                    </div>
                </div>
                <form onSubmit={handleEmailLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <p>
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </div>
            </div>
        </div>
    );
};

export default Login;
