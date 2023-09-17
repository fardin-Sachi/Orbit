import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import login_book from '../image/books-1281581_1280.jpg';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Import createUserWithEmailAndPassword
import { auth } from "./firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const authInstance = getAuth();
      const userCredential = await createUserWithEmailAndPassword(authInstance, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User created:", user); 
        })

      // console.log("User created:", user);
      
      // Redirect to the Home page
      navigate('/user'); // Assuming that '/' is the route for the Home component
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating user:", errorCode, errorMessage);
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
          <h1>Sign up to ORBIT</h1>
          <form className="signup-form">
            <input
              type='text' // Change this to 'text' for Full name
              placeholder='Full name'
            />
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
            <button className='login_btn' type='submit' onClick={handleSignup}>
              Sign Up
            </button>
          </form>
          <Link to='/user/login' className='link_btn' >Have an account? Log in.</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
