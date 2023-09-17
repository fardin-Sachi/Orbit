import React, { useEffect, useState } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import './admin_db_total_book.css'
import { Link } from "react-router-dom";

const Admin_db_total_book = () => {
  const [books, setBooks] = useState([])

  const fetchAllBooks = async () => {
    try {
      const response = await fetch('/api/admin/books');
      if (response.ok) {
        const data = await response.json();
        setBooks(data)
        console.log(data)
      } else {
        throw new Error('Error fetching data from the backend.');
      }
    } catch (err) {
      throw new Error('An error occurred while fetching data.');
    }
  }

  useEffect(() => {
    fetchAllBooks()
  }, [])
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
            {/* <td>Agnibina</td>
            <td>Kazi nazrul islam</td>
            <td>200tk</td>
            <td><span className="actions"><BsFillTrashFill className="delete_btn" />   <Link to='../my_admin/admin_home/admin_update_book'><BsFillPencilFill className="edit-btn" /></Link></span></td> */}
            {books.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price}tk</td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill className="delete_btn" />
                    <Link to={`../my_admin/admin_home/admin_update_book/${book._id}`}>
                      <BsFillPencilFill className="edit-btn" />
                    </Link>
                  </span>
                </td>
              </tr>
            ))}

          </tbody>
        </table>

      </div>
    </>
  )
}

export default Admin_db_total_book;