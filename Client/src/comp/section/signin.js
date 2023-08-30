import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './login.css';
import facebook_logo from '../image/facebook.png'
import google_logo from '../image/search.png'
import login_book from '../image/books-1281581_1280.jpg'


const Signin = () => {
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
              <img className=''  />
              <input
                  type='Full name'
                  placeholder='Full name'
                />

              <form className="signup-form">
                <input
                  type='email'
                  placeholder='email'
                />
               <input
                  type='password'
                  placeholder='password'
                />
                <button className='login_btn' type='submit'>Sign Up</button>
              </form>
              <Link to='/login' className='link_btn' > Have accout?Log in.</Link>
                
</div>
           
          </div>
          </div>
      
        );
  
}

export default Signin
