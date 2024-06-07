import React, { useState,useEffect } from 'react';
import './Signup.scss';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";


const Signup = () => {
    const [passwordStrength, setPasswordStrength] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true); 
    const [successMessage, setSuccessMessage] = useState(false);


    const checkPasswordStrength = (password) => {
        if (password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password) ) {
            setPasswordStrength('The Password is strong');
        } else if (password.length >= 6 && /[a-zA-Z]/.test(password)){
            setPasswordStrength('The Password is moderate');
        } else {
            setPasswordStrength('The Password is weak');
        }
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        checkPasswordStrength(password);
    };

    const handleConfirmPasswordChange = (e) => {
        const confirmPassword = e.target.value;
        const password = e.target.form.password.value;
        setPasswordMatch(password === confirmPassword);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        try {
            if (password !== confirmPassword) {
                throw new Error("Passwords do not match");
            }
            if (passwordStrength !== 'The Password is strong' && passwordStrength !== 'The Password is moderate') {
                throw new Error("Password must be moderately or strongly secure");
            }
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(userCredential.user, {
                displayName: name
            });

            setSuccessMessage('Signup successful! You can now log in.');
            // alert("User signed up successfully:", userCredential.user);
        } catch (error) {
            console.error("Error signing up:", error.message);
        }
    };

    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage(false);
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);


    return (
        <div className="signup-container">

        <div className="overlay"></div>
        <div className="sign-up">
          <div className="left">
        <h1>HEALTH MASTER</h1>


</div>
          
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                {successMessage && <div className="success-message">{successMessage}</div>}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required onChange={handlePasswordChange} />
                        {passwordStrength && <p className={`password-strength ${passwordStrength}`}>{passwordStrength} password</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" required onChange={handleConfirmPasswordChange} />
                        {!passwordMatch && <p className="password-match">Passwords do not match</p>}
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <p>Already have an account? <a href="/login">Log in</a></p>
            </div>
            </div>
        </div>
    );
};

export default Signup;
