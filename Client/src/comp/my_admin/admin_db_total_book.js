import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import './admin_db_total_book.css'
import { Link } from "react-router-dom";




const Admin_db_total_book = () => {
  return (
    <>
       
        <div className="table-wrapper">
          <h1>THE TOTAL BOOK IN DATABASE</h1>

        <table className="table" >
                <thead>
                <tr>
                    <th className="expand">Book Title</th>
                    <th className="expand">Book Author</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    <td>Agnibina</td>
                    <td>Kazi nazrul islam</td>
                    <td>200tk</td>
                    <td><span className="actions"><BsFillTrashFill className="delete_btn"/>   <Link to='../my_admin/admin_home/admin_update_book'><BsFillPencilFill className="edit-btn"/></Link></span></td>
                    
                </tbody>
              </table>
      

      </div>
           
     
    </>
  )
}

export default Admin_db_total_book;