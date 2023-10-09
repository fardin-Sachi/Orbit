import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import login_book from '../image/books-1281581_1280.jpg';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"; // Import createUserWithEmailAndPassword
import { auth } from "./firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [userdata, setUserdata] = useState({
    name: '',
    email:'',
  });
  const [loading,setLoading] = useState(false)
  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const authInstance = getAuth();
      const userCredential = await createUserWithEmailAndPassword(authInstance, userdata.email, password);
      const user = userCredential.user;

      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify(userdata),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if(response.ok){
        const data = await response.json()
        console.log("User created:", userdata);
        navigate('/user/profile')  
      }
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating user:", errorCode, errorMessage);
    }
    finally{
      setLoading(false)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserdata({
      ...userdata,
      [name]: value,
    });
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
          <h1>Sign up to ORBIT</h1>
          <form className="signup-form">
            <input
              type='text'
              name="name"
              placeholder='Full name'
              value={userdata.name}
              onChange={handleChange}
            />
            <input
              type='email'
              name="email"
              placeholder='Email'
              value={userdata.email}
              onChange={handleChange}
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className='login_btn' type='submit' onClick={handleSignup} disabled={loading}>
              {loading? 'Signing Up...':'Sign Up'}
            </button>
          </form>
          <Link to='/user/login' className='link_btn' >Have an account? Log in.</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
