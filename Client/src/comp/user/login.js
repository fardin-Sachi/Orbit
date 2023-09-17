import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import google_logo from '../image/search.png'
import login_book from '../image/books-1281581_1280.jpg'
import { auth } from "./firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleEmailPasswordLogin = async () => {
    try {
      setLoading(true)
      setError(null)
      const authInstance = getAuth();

      // Sign in with email and password
      await signInWithEmailAndPassword(authInstance, email, password);

      // Redirect to the Home page after successful login
      navigate('/user/home'); // Assuming that '/' is the route for the Home component
    } catch (error) {
      setError("Invalid email or password. Please try again.")
    } finally{
      setLoading(false)
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setLoading(true)
      setError(null)
      const authInstance = getAuth();
      const provider = new GoogleAuthProvider();
  
      // Sign in with Google using the provider
      await signInWithPopup(authInstance, provider)
        .then((result) => {
          // Handle successful login if needed
          console.log('Google login success:', result.user);
          navigate('/user'); // Redirect to the Home page after successful login
        })
        .catch((error) => {
          setError("Google login failed. Please try again.")
        });
    } catch (error) {
      setError("An unexpected error occurred. Please try again.")
    } finally{
      setLoading(false)
    }
  };
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      setLoading(true)
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false)
    }
  }

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
            <button className='login_btn' type='button' onClick={handleEmailPasswordLogin} disabled={loading}>
              {loading ? 'Logging in...' : 'Log In'}
            </button>
            {error && <p className="error-message">{error}</p>}
          </form>
          
          <Link  className='link_btn' onClick={resetPassword}><p>forget passoword</p></Link>

          <Link to='/user/signup' className='link_btn' >Don't have an account? Sign up.</Link>

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
            
            <p className='text_logo'>Sign in with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
