import React from 'react';
import { useEffect, useState } from "react";
import './App.css'


import Header from './comp/header.js';
import Admin_rout from '../src/comp/admin_rout.js'
import { BrowserRouter } from 'react-router-dom';
import Side_bar from '../src/comp/side_bar.js'
import Admin_home from './comp/home';




function App() {

  return (
    <>
   <div className='grid-container'>
   <BrowserRouter>
   <Header/>
   <Side_bar/>
   <Admin_rout/>
    </BrowserRouter>
   </div>
   
       


    </>
  );
}

export default App;
