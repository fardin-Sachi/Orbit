import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import './updated_book_list.css'
import { Link } from "react-router-dom";




const Updated_book_list = () => {
  return (
    <>
       
        <div className="table-wrapper">
            <h1>THIS BOOK ARE UPDATED</h1>

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
                    <td><span className="actions"><Link to='../my_admin/admin_home/admin_update_book'><BsFillPencilFill className="edit-btn"/></Link></span></td>
                    
                </tbody>
              </table>
      

      </div>
           
     
    </>
  )
}

export default Updated_book_list;