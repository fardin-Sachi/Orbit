import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home.js'
import Books from './books.js'
import { Routes,useNavigate } from 'react-router-dom'
import Login from './login.js'
import Signup from './signup.js'
import Cart from './cart.js'
import Wish from './wish.js'
import { handleUserAuth } from './firebase.js'

const Rout = ({ book, setBook, detail, view, close, setClose, cart, setCart, addtocart, wish, setWish, addtowish }) => {
  const navigate = useNavigate()

  return (
    <>
      <Routes>
        <Route path='/' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} addtowish={addtowish} />}></Route>

        <Route path='/user' element={<Home detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} addtowish={addtowish} />}>
          
        </Route>
''
        <Route path='/user/books' element={<Books book={book} setBook={setBook} detail={detail} view={view} close={close} setClose={setClose} addtocart={addtocart} addtowish={addtowish} />}></Route>

        <Route path='/user/cart' element={<Cart cart={cart} setCart={setCart} />}></Route>

        <Route path='/user/wish' element={<Wish wish={wish} setWish={setWish} />}></Route>

        <Route path='/user/login' element={<Login />}></Route>

        <Route path='/user/signup' element={<Signup />}></Route>
      </Routes>
    </>
  )
}

export default Rout;
