import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Home.js'
import Books from './books.js'
import { Routes } from 'react-router-dom'
import Login from './login.js'
import Signin from './signin.js'

const Rout = ({book,setBook,detail,view,close,setClose}) => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/books' element={<Books book={book} setBook={setBook} detail={detail} view={view} close={close} setClose={setClose}/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signin' element={<Signin/>}></Route>
            
            
        </Routes>
    </>
  )
}

export default Rout