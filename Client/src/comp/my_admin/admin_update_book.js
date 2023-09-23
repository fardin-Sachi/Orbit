import React, { useState, useEffect } from "react";
import "./admin_update_book.css";
import { useParams,Link } from "react-router-dom";

const Admin_update_book = () => {
  const { bookId } = useParams();
  const [bookdata, setBookdata] = useState({
    _id: "",
    title: "",
    author: "",
    genre: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetch(`/api/admin/books/${bookId}`);
        if (response.ok) {
          const data = await response.json();
          // Update the state with book details
          setBookdata(data);
        } else {
          console.log("Error fetching book data");
        }
      } catch (err) {
        console.error("Try Again!", err);
      }
    };

    fetchBookData(); // Fetch the book data when the component mounts
  }, [bookId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/admin/books/${bookId}`, {
        method: "PATCH",
        body: JSON.stringify(bookdata),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (response.ok) {
        console.log("Book updated successfully");
      } else {
        console.log("Error updating book");
      }
    } catch (err) {
      console.error("Try Again!", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the state with the changed value
    setBookdata({
      ...bookdata,
      [name]: value,
    });
  };

  return (
    <>
      <div className="main_container_form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">UPDATE BOOK</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="book name"
            value={bookdata.title} // Use bookdata.title here
            onChange={handleChange}
          />

          <label htmlFor="author">AUTHOR NAME</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Author name..."
            value={bookdata.author} // Use bookdata.author here
            onChange={handleChange}
          />

          <label htmlFor="genre">GENRE</label>
          <input
            type="text"
            id="genre"
            name="genre"
            placeholder="Genre..."
            value={bookdata.genre} // Use bookdata.genre here
            onChange={handleChange}
          />

          <label htmlFor="price">BOOK PRICE</label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Book price..."
            value={bookdata.price} // Use bookdata.price here
            onChange={handleChange}
          />

          <label htmlFor="quantity">QUANTITY</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            placeholder="Quantity..."
            value={bookdata.quantity} // Use bookdata.quantity here
            onChange={handleChange}
          />

          <Link to='/my_admin/admin_home/admin_db_total_book'><input type="submit" value="Submit" /></Link>
        </form>
      </div>
    </>
  );
};

export default Admin_update_book;
