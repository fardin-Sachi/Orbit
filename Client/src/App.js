import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './comp/user/Navbar';
import Rout from './comp/user/Rout';
import Footer from './comp/user/footer';
import booksdetail from './comp/user/booksdetails';
import Admin_rout from './comp/my_admin/admin_rout';
import Side_bar from './comp/my_admin/side_bar';
import Header from './comp/my_admin/header';
import User_Home from './comp/user/Home';
import Admin_Home from './comp/my_admin/home'; // Import the Admin Home component
import './App.css';
import Home from './comp/user/Home';


const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);


//admin mode shifting
  const toggleAdminView = () => {
    setIsAdmin((prevState) => !prevState);
  };


  
  

  const [loading,setLoading] = useState(false)
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const [close, setClose] = useState(false);
  const [title, setTitle] = useState("Orbit");
  const [detail, setDetail] = useState([]);
  const [book, setBook] = useState(booksdetail);

  const searchbtn = (book) => {
    const change = booksdetail.filter((x) => {
      return x.genre === book;
    });
    setBook(change);
  };

  // const changeTitle = (event) => {
  //   setTitle(event.target.value);
  // };

  //product detail
  const view = (book) => {
    setDetail([{ ...book }])
    setClose(true)
  }
  //add to cart
  const addtocart = (book) => {
    const exist = cart.find((x) => {
      x._id = book._id
    })
    if (exist) {
      alert('This Book is already added to cart')
    }
    else {
      setCart([...cart, { ...book, qty: 1 }])
      alert("Book is added to the cart")
    }
  };

  const addtowish = (book) => {
    const exist = wish.find((x) => x.id === book.id);
    if (exist) {
      alert('This Book is already added to wish');
    } else {
      setWish([...wish, { ...book, qty: 1 }]);
      alert('Book is added to the wish');
    }
  };

  return (
    <div className={isAdmin ? 'grid-container' : 'emniee'}>
      <BrowserRouter>
        {isAdmin ? (
          <>
            <Header />
            <Side_bar />
            <Admin_rout />
          </>
        ) : (
          <>
            <Navbar searchbtn={searchbtn} />
            <Rout
              book={book}
              setBook={setBook}
              detail={detail}
              view={view}
              close={close}
              setClose={setClose}
              cart={cart}
              setCart={setCart}
              addtocart={addtocart}
              wish={wish}
              setWish={setWish}
              addtowish={addtowish}
            />
          <Footer toggleAdminView={toggleAdminView} isAdmin={isAdmin} />

          </>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
