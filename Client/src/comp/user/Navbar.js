import React, { useState } from 'react';
import { PiBookOpenFill } from 'react-icons/pi';
import { AiOutlineHeart} from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBagCheck } from 'react-icons/bs';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import logo from '../image/orbit logo.png'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { getAuth, signOut } from '@firebase/auth';
import {  } from '@firebase/auth';
// import { Auth, logout } from 'firebase/auth';

const Navbar = ({searchbtn}) => {
  const[search,setSearch]=useState()
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)
  let auth = getAuth()
  let user = auth.currentUser
  const navigate = useNavigate()
  const logout = async () => {
    try{
      setLoading(true);
      setError(null);
      await signOut(auth);
      console.log("Successfully signed out!")
      navigate('/home')
    }catch(err){
      // console.error(err+"4")
      // alert(err.message)
      setError("Unable to logout, please try again!")
    } finally{
      setLoading(false)
    }
  };
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
              {user!==null? <Link to='/user/profile'><AiOutlineUser/></Link> : <p></p>}
            </div>
              {user!==null? <p>Hello, {user.email}</p> : <p></p>}
              {/* user.providerData.forEach((profile) => {profile.email}   */}
              {/* <p>Hello,user</p> */}
            </div>
            <div className='second_icon'>
              {user!==null? <Link to='/user/cart' className='link'><BsBagCheck/></Link> : <p></p>}
              {user!==null? <Link to='/wish' className='link'><AiOutlineHeart/></Link> : <p></p>}
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
              {
                user!==null?
                <Link to='/user/books' className='link'>Books</Link>
                :
                <Link to='/user/login' className='link'>Books</Link>
              }
            </li>
            <li>
              {
                user!==null?
                <Link to='/user/about' className='link'>About</Link>
                :
                <Link to='/user/login' className='link'>About</Link>
              }
            </li>
            <li>
              {
                user!==null?
                <Link to='/user/contact' className='link'>Contact</Link>
                :
                <Link to='/user/login' className='link'>Contacts</Link>
              }
              
            </li>
          </ul>
          </div>

          {/* login + logout button */}
          <div className='auth'> 
            {user!==null? <Link to='/user'><button onClick={logout} disabled={loading}>{loading? 'Logging out' : <CiLogout/>}</button></Link> : <Link to='/user/login'><button><CiLogin/></button></Link>}            
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Navbar;