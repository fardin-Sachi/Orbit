import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './admin_signin.css';
import login_book from '/home/phoenix/Orbit (Main Project)/Orbit/Client/src/comp/my_admin/image/books-1281581_1280.jpg'
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const Admin_signin = ({openUserMode, isAdmin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  //handle admin to user
  const toggleAdminView = () => {
    openUserMode(!isAdmin);
  };


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
      // Handle the error and display it to the user.
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
          {isAdmin ? (
            <span onClick={toggleAdminView}>User Mode</span>
          ) : (
            <Link to='/user/login' onClick={toggleAdminView}>
              Want to user mode?
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin_signin;
