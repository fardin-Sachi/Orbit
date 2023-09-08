import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import facebook_logo from '../image/facebook.png'
import google_logo from '../image/search.png'
import login_book from '../image/books-1281581_1280.jpg'

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
} from "firebase/auth";


const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailPasswordLogin = async () => {
    try {
      const authInstance = getAuth();

      // Sign in with email and password
      await signInWithEmailAndPassword(authInstance, email, password);

      // Redirect to the Home page after successful login
      navigate('/'); // Assuming that '/' is the route for the Home component
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const authInstance = getAuth();
      const provider = new GoogleAuthProvider();
  
      // Sign in with Google using the provider
      await signInWithPopup(authInstance, provider)
        .then((result) => {
          // Handle successful login if needed
          console.log('Google login success:', result.user);
          navigate('/'); // Redirect to the Home page after successful login
        })
        .catch((error) => {
          // Handle errors
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Google Auth Error:', errorCode, errorMessage);
        });
    } catch (error) {
      // Handle any unexpected errors
      console.error('Error:', error);
    }
  };

  return (
    <div className="login_container">
      <div className='card_container'>
        <div className='left_section'>
          <div className='upper_part'>
            <img className='login_book' src={login_book} alt="book" />
          </div>
          <div className='lower_part'></div>
        </div>

        <div className='right_section'>
          <h1>Log in to ORBIT</h1>
          <form className="login-form">
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='login_btn' type='button' onClick={handleEmailPasswordLogin}>
              Log In
            </button>
          </form>
          <Link to='/signup' className='link_btn' >Don't have an account? Sign up.</Link>

          <div className='logo_container'>
            <img
              className="google_logo"
              src={google_logo}
              alt="Google Logo"
              onClick={handleGoogleLogin}
              style={{
                cursor: "pointer",
                transition: "opacity 0.3s ease-in-out",
              }}
            />
            <img className='facebook_logo' src={facebook_logo} alt="Facebook Logo" />
            <p className='text_logo'>Sign in with Google or Facebook account</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
