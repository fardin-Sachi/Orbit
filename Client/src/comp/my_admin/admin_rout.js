import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Admin_signin from '../my_admin/admin_signin.js'
import Admin_signup from '../my_admin/admin_signup.js'
import Admin_home from '../my_admin/home.js'
import Side_bar from '../my_admin/side_bar.js'
import Header from './header.js'
import Admin_db_total_book from '../my_admin/admin_db_total_book.js'
import Add_book_db from '../my_admin/add_book_db.js'
import Admin_update_book from '../my_admin/admin_update_book.js'
import Updated_book_list from '../my_admin/updated_book_list.js'



const Admin_rout = () => {
  return (
    <>
        <Routes>
            <Route path='/my_admin/admin_home' element={<Admin_home/>}></Route>
            
            <Route path='/my_admin' element={<Admin_signin/>}></Route>
            
            {/* <Route path='/my_admin/admin_signup' element={<Admin_signup/>}></Route> */}
            
            <Route path='/my_admin/admin_home/admin_db_total_book' element={<Admin_db_total_book/>}></Route>
            
            <Route path='/my_admin/admin_home/add_book_db' element={<Add_book_db/>}></Route>
            
            {/* <Route path='/my_admin/admin_home/updated_book_list' element={<Updated_book_list/>}></Route> */}

            <Route path="/my_admin/admin_home/admin_update_book/:bookId" element={<Admin_update_book/>} />

            
        </Routes>
    </>
  )
}

export default Admin_rout;