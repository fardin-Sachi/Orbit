import React from 'react'
import {RiFacebookFill} from 'react-icons/ri'
import {RiInstagramFill} from 'react-icons/ri'
import {RiYoutubeFill} from 'react-icons/ri'
import {RiTwitterFill} from 'react-icons/ri'
import logo from '../image/orbit logo.png'
import './footer.css'


const Footer = () => {
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
                    <p>we are here to spread knowledge and happiness</p>
                    <div className='icon'>
                        <li><RiFacebookFill/></li>
                        <li><RiInstagramFill/></li>
                        <li><RiYoutubeFill/></li>
                        <li><RiTwitterFill/></li>
                    </div>
                </div>

            </div>
            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>Shipping</li>
                    <li>Return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms and Condition</li>

                </ul>
            </div>

        </div>
        </div> 
    
    </>
  )
}

export default Footer