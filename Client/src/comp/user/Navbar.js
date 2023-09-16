import React, { useState } from 'react';
import { PiBookOpenFill } from 'react-icons/pi';
import { AiOutlineHeart} from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import logo from '../image/orbit logo.png'

import { Link } from 'react-router-dom';
import './Navbar.css';
import { Auth, logout } from 'firebase/auth';

const Navbar = ({searchbtn}) => {
  const[search,setSearch]=useState()
  return (
    <>
       <div className='free'>
        <div className='icon'>
          <PiBookOpenFill />
        </div>
        <p>Knowledge is Power</p>
      </div>

      <div class className='main_header'>
        <div className='container'>
          <div className='logo'>
            {/* have to add logo here */}
            <img src={logo} alt=''></img>
          </div>
          <div className='search_box'>
            <input type='text' value={search} placeholder='search your book' autoComplete='off' onChange={(e)=>setSearch(e.target.value)}></input>
            <button onClick={()=> searchbtn(search)}>Search</button>
          </div>
          <div className='icon'>
            <div className='account'>
            <div className='user_icon'>
             <Link to='user/profile'><AiOutlineUser/></Link> 
            </div>
              <p>Hello,user</p>
            </div>
            <div className='second_icon'>
              <Link to='user/wish' className='link'><AiOutlineHeart/></Link>
              <Link to='user/cart' className='link'><BsBagCheck/></Link>
           
            </div>
            


          </div>
        </div>

      </div>
      <div className='header'>
        <div className='container'>
          <div className='nav'>
          <ul>
            <li>
              <Link to='/user' className='link'>Home</Link>
            </li>
            <li>
              <Link to='/user/books' className='link'>Books</Link>
            </li>
            <li>
              <Link to='/user/about' className='link'>About</Link>
            </li>
            <li>
              <Link to='/user/contact' className='link'>Contact</Link>
            </li>
          </ul>
          </div>





          {/* login + logout button */}
          <div className='auth'>
           <Link to='/user/login'><button><CiLogin/></button></Link> 
           <Link to='/user'><button><CiLogout/></button></Link>

          </div>
        </div>
      </div>
    
    </>
       );
};

export default Navbar;