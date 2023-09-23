import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './admin_signin.css';
import login_book from '../image/books-1281581_1280.jpg'
import { getAuth } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const Admin_signin = ({ openUserMode, isAdmin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState(null)



  //handle admin to user
  const toggleAdminView = () => {
    openUserMode(!isAdmin);
  };


  const handleEmailPasswordLogin = async () => {
    try {
      setLoading(true)
      setError(null)
      const authInstance = getAuth();

      // Sign in with email and password
      await signInWithEmailAndPassword(authInstance, email, password);

      // Redirect to the Home page after successful login
      navigate('/my_admin/admin_home'); // Assuming that '/' is the route for the Home component
    } catch (error) {
      setError("Error Logging In")
      // Handle the error and display it to the user.
    } finally{
      setLoading(false)
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
          <h1>Log in to ORBIT Admin Panel</h1>
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

          </form>
          {isAdmin ? (
            <span onClick={toggleAdminView}>User Mode</span>
          ) : (
            <Link to='/user/login' onClick={toggleAdminView}>
              Want to Go to User Mode?
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admin_signin;
