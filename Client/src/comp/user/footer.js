import React from 'react'
import {RiFacebookFill} from 'react-icons/ri'
import {RiInstagramFill} from 'react-icons/ri'
import {RiYoutubeFill} from 'react-icons/ri'
import {RiTwitterFill} from 'react-icons/ri'
import logo from '../image/orbit logo.png'
import './footer.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { auth } from './firebase'


const Footer = ({ toggleAdminView,isAdmin }) => {
    const navigate = useNavigate()
  return (
    <>
       <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                    {/* have to add logo here */}
                    <img src={logo} alt='logo'></img>
                </div>
                <div className='detail'>
                    <p>To learn to read is to light a fire; every syllable that is spelled out is a spark</p>
                    {/* <div className='icon'>
                        <li><RiFacebookFill/></li>
                        <li><RiInstagramFill/></li>
                        <li><RiYoutubeFill/></li>
                        <li><RiTwitterFill/></li>
                    </div> */}
                </div>

            </div>
            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li onClick={()=>auth.currentUser?navigate('/user/profile'):null}>Account</li>
                    <li>Order</li>
                    <li onClick={()=>auth.currentUser?navigate('/user/cart'):null}>Cart</li>
                    {/* <li>Shipping</li>
                    <li>Return</li> */}
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li onClick={()=>navigate('/')}>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms and Condition</li>
                    <li>
                    {isAdmin ? (
  <span onClick={toggleAdminView}>User Mode</span>
) : (
  <Link to="/my_admin" onClick={toggleAdminView}>Admin Panel</Link>
)}

          </li>
 

                </ul>
            </div>

        </div>
        </div> 
    
    </>
  )
}

export default Footer