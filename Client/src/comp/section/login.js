import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './login.css';
import facebook_logo from '../image/facebook.png'
import google_logo from '../image/search.png'
import login_book from '../image/books-1281581_1280.jpg'



const Login = () => {
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
              <img className=''  />
              <form className="login-form">
                <input
                  type='email'
                  placeholder='email'
                />
                <input
                  type='password'
                  placeholder='password'
                />
                <button className='login_btn' type='submit'>Log In</button>
              </form>
              <Link to='/signin' className='link_btn' >Don't have accout?Sign up.</Link>
                
          
              <div className='logo_container'>
                <img className='google_logo' src={google_logo} alt="Google Logo" />
                   <img className='facebook_logo' src={facebook_logo} alt="Facebook Logo" />
                   <p className='text_logo'>Sign in with Google or Facebook account</p>         </div>
               </div>
           
          </div>
          </div>
      
        );
  
}

export default Login
