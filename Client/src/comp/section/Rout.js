import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home.js'
import Books from './books.js'
import { Routes } from 'react-router-dom'
import Login from './login.js'
import Signup from './signup.js'
import Cart from './cart.js'
import { getAuth } from '@firebase/auth'

const Rout = ({book,setBook,detail,view,close,setClose,cart,setCart,addtocart}) => {
  const auth = getAuth()
  const user = auth.currentUser
  return (
    <>
        <Routes>
         
            <Route path='/user/home' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} />}></Route>
            
            <Route path='/user/books' element={<Books book={book} setBook={setBook} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart}/>}></Route>
            
            <Route path='/user/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
            
            <Route path='/user/login' element={<Login/>}></Route>
            
            <Route path='/user/signup' element={<Signup/>}></Route>
        </Routes>
    </>
  )
}

export default Rout;
