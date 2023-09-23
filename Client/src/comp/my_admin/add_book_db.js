import React, { useState } from "react";
import "./add_book_db.css"; // Import the external CSS file
import { Link,useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const Add_book_db = () => {
  const [bookdata, setBookdata] = useState({
    title: '',
    author: '',
    genre: '',
    price: '',
    quantity: '',
  })
  const auth = getAuth()
  const user = auth.currentUser
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if(user!==null){
        const response = await fetch('/api/admin/books', {
          method: 'POST',
          body: JSON.stringify(bookdata),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
        })
        if (response.ok) {
          const data = await response.json()
          console.log(data)
          navigate('/my_admin/admin_home/admin_db_total_book')
        }
        else {
          console.log("Error Addding Book")
        }
      }
      else navigate('/my_admin')
    } catch (err) {
      console.log("Try Again!")
    }
  }
  const handleChange = (e) => {
    if(user!==null){
      const { name, value } = e.target;
      setBookdata({
        ...bookdata,
        [name]: value,
      });
    }
    else navigate('/my_admin')
  }

  return (
    <>
  
      <div className="main_container_form">
        <h1>ADD BOOK</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">BOOK NAME</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Book name..."
            value={bookdata.title}
            onChange={handleChange}
          />

          <label htmlFor="author">AUTHOR NAME</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author name..."
            value={bookdata.author}
            onChange={handleChange}
          />


          <label htmlFor="genre">GENRE</label>
          <input
            type="text"
            id="genre"
            name="genre"
            placeholder="Genre..."
            value={bookdata.genre}
            onChange={handleChange}
          />

          <label htmlFor="price">BOOK PRICE</label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Book price..."
            value={bookdata.price}
            onChange={handleChange}
          />

          <label htmlFor="quantity">QUANTITY</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            placeholder="Quantity..."
            value={bookdata.quantity}
            onChange={handleChange}
          />

          {/* //file upload */}
          {/* <input type="file" className="myFile" name="filename" /> */}

          <input type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};

export default Add_book_db;
