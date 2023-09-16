import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Admin_signin from './admin_signin.js'
import Admin_signup from './admin_signup.js'
import Admin_home from './home.js'
import Side_bar from './side_bar.js'
import Header from './header.js'
import Admin_db_total_book from './admin_db_total_book.js'
import Add_book_db from './add_book_db.js'
import Admin_update_book from './admin_update_book.js'
import Updated_book_list from './updated_book_list.js'



const Admin_rout = () => {
  return (
    <>
        <Routes>
            <Route path='/admin_home' element={<Admin_home/>}></Route>
            <Route path='/' element={<Admin_signin/>}></Route>
            <Route path='/admin_signup' element={<Admin_signup/>}></Route>
            <Route path='admin_home/admin_db_total_book' element={<Admin_db_total_book/>}></Route>
            <Route path='admin_home/add_book_db' element={<Add_book_db/>}></Route>
            <Route path='admin_home/updated_book_list' element={<Updated_book_list/>}></Route>
            <Route path='admin_home/Admin_update_book' element={<Admin_update_book/>}></Route>
            
           
        </Routes>
    </>
  )
}

export default Admin_rout;