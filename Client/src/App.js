import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Navbar from './comp/section/Navbar';
import Rout from '../src/comp/section/Rout'
import { BrowserRouter } from 'react-router-dom';
import Footer from '../src/comp/section/footer'
import booksdetail from '../src/comp/section/booksdetails';



const App = () => {


//add to cart
  const [cart,setCart]=useState([])

  const [close,setClose]=useState(false)


  const [title, setTitle] = useState("Orbit");

  //product detail
  const[detail,setDetail]=useState([])

  //filter product
  const[book,setBook]=useState(booksdetail)
  const searchbtn=(book)=>{
      const change= booksdetail.filter((x)=>{
        return x.genre===book
      })

      setBook(change)
  }

  useEffect(() => {
    document.title = title;
  }, [title]);

  const changeTitle = (event) => {
    setTitle(event.target.value);
  };

  //product detail
  const view=(book)=>{
      setDetail([{... book}])
      setClose(true)
  }

  //add to cart


  const addtocart = (book)=>
  {

    const exist=cart.find((x)=>{
      x.id===book.id
    })
    if(exist){
      alert('This Book is already added to cart')
    }
    else{
      setCart([...cart,{...book,qty:1}])
      alert("Book is added to the cart")
    }
  }
  console.log(cart)




  

  return (
    <>
    <BrowserRouter>
       <Navbar searchbtn={searchbtn}/>
       <Rout book={book} setBook={setBook} detail={detail} view={view} close={close} setClose={setClose} cart={cart} setCart={setCart} addtocart={addtocart}/>
       <Footer/>
    </BrowserRouter>
       
    </>
  
  )
}

export default App
