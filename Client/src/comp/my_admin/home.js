import React from 'react';
import Side_bar from './side_bar';
import Header from './header';
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { BsCart3, BsFillArchiveFill, BsGrid1X2Fill, BsPeopleFill } from 'react-icons/bs';
import './home.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {AiFillFileAdd} from 'react-icons/ai'
import {GrUpdate} from 'react-icons/gr'
import {IoBookSharp} from 'react-icons/io5'

function Admin_home() {

  const [openSidebarToggle,setOpenSidebarToggle]=useState(false)
  const OpenSidebar=()=>{
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>

    <div className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>

      </div>


      <div className='main-cards'>

       <div className='card'>
       <Link to='/my_admin/admin_home/admin_db_total_book'className='link-style'>
        <div className='card-inner'>
          <h3>BOOKS</h3>
          <IoBookSharp className='card_icon'/>
        </div>
        <h1>300</h1>
        </Link>
        </div>
     

        <div className='card'>
        <Link to='/my_admin//admin_home/admin_db_total_book'className='link-style'>
        <div className='card-inner'>
          <h3>Customer</h3>
          <BsFillArchiveFill className='card_icon'/>
        </div>
        <h1>300</h1>
        </Link>
        </div>

         <div className='card'>
         <Link to='/my_admin/admin_home/add_book_db' className='link-style'>
        <div className='card-inner'>
          <h3>ADD BOOK</h3>
          <AiFillFileAdd className='card_icon'/>
        </div>
        <h1>300</h1>
        </Link>
        </div>
      
      
       {/* <div className='card'>
       <Link to='/my_admin/admin_home/updated_book_list' className='link-style'>
        <div className='card-inner'>
          <h3>UPDATE BOOK</h3>
        <GrUpdate className='card_icon'/>
        </div>
        <h1>300</h1>
        </Link>
        </div> */}  

      </div>
    </div>

        
       


    </>
  );
}

export default Admin_home;