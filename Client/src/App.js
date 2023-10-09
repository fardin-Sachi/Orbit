import React, { useState } from 'react';
import { BrowserRouter, /* Route */ } from 'react-router-dom';
import Navbar from './comp/user/Navbar';
import Rout from './comp/user/Rout';
import Footer from './comp/user/footer';
import booksdetail from './comp/user/booksdetails';
import Admin_rout from './comp/my_admin/admin_rout';
import Side_bar from './comp/my_admin/side_bar';
import Header from './comp/my_admin/header';
// import User_Home from './comp/user/Home';
// import Admin_Home from './comp/my_admin/home'; // Import the Admin Home component
import './App.css';
// import Home from './comp/user/Home';
// import { useNavigate } from 'react-router-dom';



const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);


//admin mode shifting
  const toggleAdminView = () => {
    setIsAdmin((prevState) => !prevState);
  };

  // const [loading,setLoading] = useState(false)
  const [cart, setCart] = useState([]);
  const [wish, setWish] = useState([]);
  const [close, setClose] = useState(false);
  // const [title, setTitle] = useState("Orbit");
  const [detail, setDetail] = useState([]);
  const [book, setBook] = useState(booksdetail);

  const searchbtn = (book) => {
    const lowercaseBook = book.toLowerCase(); // Convert the input to lowercase
    const change = booksdetail.filter((x) => {
      const lowercaseGenre = x.genre.toLowerCase(); // Convert genre to lowercase
      const lowercaseTitle = x.title.toLowerCase(); // Convert title to lowercase
      const lowercaseAuthor = x.author.toLowerCase()
      if(lowercaseGenre.includes(lowercaseBook) || lowercaseTitle.includes(lowercaseBook) || lowercaseAuthor.includes(lowercaseBook)){
        return lowercaseBook
      }
      // return []
      // console.log(`DASD: ${lowercaseTitle} `,lowercaseTitle.includes(lowercaseBook))
      // return lowercaseGenre===lowercaseBook || lowercaseTitle===lowercaseBook || lowercaseAuthor===lowercaseBook;
    });
    setBook(change);
    
  };

  // const filter_book_author = (author) => {
  //   const lowercaseAuthor = author.toLowerCase(); // Convert the input to lowercase
  //   const change = booksdetail.filter((x) => {
  //     const lowercaseBookAuthor = x.author.toLowerCase(); // Convert author to lowercase
  //     return lowercaseBookAuthor===lowercaseAuthor;
  //   });
  //   setBook(change);
  // };
  // const navigate=useNavigate()
  const authorBasedBooks = (author) => {
    // const filteredBooks = booksDetail.filter((book) => book.author === author);
    // setBooks(filteredBooks)

    const lowercaseBook = author.toLowerCase(); // Convert the input to lowercase
    const change = booksdetail.filter((x) => {
      const lowercaseAuthor = x.author.toLowerCase(); // Convert genre to lowercase
   
      return lowercaseAuthor === lowercaseBook
    });
    setBook(change);

    
    // console.log(change)
}

  const view = (book) => {
    setDetail([{ ...book }])
    setClose(true)
  }
  //add to cart
  const addtocart = (book) => {
    const exist = cart.find((x) => {
      x.id = book.id
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
    const exist = cart.find((x) => {
      x._id = book._id
    })
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
              authorBasedBooks={authorBasedBooks}
            />
          <Footer toggleAdminView={toggleAdminView} isAdmin={isAdmin} />

          </>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
