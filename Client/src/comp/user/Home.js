import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AiOutlineClose} from 'react-icons/ai'
import { AiOutlineHeart} from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
import harryImage from '../image/harry_philosoper_stone.jpg';
import nazrul from '../image/poet_pic/IslamKaziNazrul.jpg'
import jibanando from '../image/poet_pic/jibanando.jpeg'
import rabindranath from '../image/poet_pic/rabindranath.jpg'
import jashim from '../image/poet_pic/jashim_uddin.jpeg'
import bankim_chandra from '../image/poet_pic/Bankim-Chandra-Chattopadhyay.jpg'
import Home_books from './home_books';
import { BsEye } from 'react-icons/bs';
import harvest from '../image/The_Last_Harvest_Paintings_of_Rabindranath_Tagore_(book).jpeg'
import './Home.css'
import { auth } from './firebase';

const Home = ({detail,view,close,setClose,addtocart,addtowish,filter_book_author}) => {
  const navigate = useNavigate()
  const someBooksForHomepage = []
  const fetchSomeBooksforHomepage = async () => {
    try{
      const response = await fetch('/api/admin/books')
      if(response.ok){
        // const data = response.json()
        // someBooksForHomepage = data
        someBooksForHomepage = response.json()
        return someBooksForHomepage
      } else throw new Error("Something's Wrong")
    } catch(err){
      throw new Error("Please reload")
    }
  }
  const handleUserAuth = () => {
    // Check if the user is logged in
    if (!auth.currentUser) {
      // User is not logged in, redirect to the /admin route
      navigate('/user/login')
    } 
  }
  return (
    <>{
      close?
      <div className='book_detail'>
      <div className='container'>
          <button onClick={() => setClose(false)} className='closebtn'><AiOutlineClose/></button>
          {
              detail.map((curElm)=>{
                  return(
                      <di className='bookbox'>
                          <div className='img_box'>
                              <img src={curElm.Img} alt={curElm.Title} ></img>
                          </div>
                          <div className='detail'>
                              <h2>{curElm.Title}</h2>
                              <h4>{curElm.Poet}</h4>
                              <h3>{curElm.price}</h3>
                              <button>Add to Cart</button>
                          </div>
                      </di>
                  )
              })
          }
         
      </div>
 </div>:null
      }
         



       <div className='top_banner'>
      <div className='container'>
        <div className='detail'>
          <h2>The best Book for Collection of 2023</h2>
          <Link to='/books' className='link'>
            Buy now <BsArrowRight />
          </Link>
        </div>
        <div className='img_box'>
          <img src={harryImage} alt='slidering' />
        </div>
      </div>
    </div>




    <div className='books_type'>
      <div className='container'>
        <div className='box'>
          <div className='img_box'>
          <img src={nazrul}alt='nazrul' ></img>
        </div>
        <div className='detail'>
          <p>Kazi Nazrul Islam</p>
        </div>
      </div>

      <div className='box'>
          <div className='img_box'>
          <img src={rabindranath}alt='rabindranath' ></img>
        </div>
        <div className='detail'>
          <p>Rabindranath Thakur</p>
        </div>
      </div>


      <div className='box'>
          <div className='img_box'>
          <img src={jashim}alt='jashim uddin' ></img>
        </div>
        <div className='detail'>
          <p>Jashim Uddin</p>
        </div>
      </div>


      <div className='box'>
          <div className='img_box'>
          <img src={bankim_chandra}alt='Bankim Chandra'></img>
        </div>
        <div className='detail'>
          <p>Bankim Chandra Chatterjee</p>
        </div>
      </div>


      <div className='box'>
          <div className='img_box'>
          <img src={jibanando}alt='jibanando' ></img>
        </div>
        <div className='detail'>
          <p>Jibanananda Das</p>
        </div>
      </div>

      </div>
      </div>




      <div className='books'>
        <h2>Top Books</h2>
  <div className='container'>
    {Home_books.map((curElm) => (
      <div className='box' key={curElm.id}>
        <div className='img_box'>
  <img src={curElm.Img} alt={curElm.Title} />
          <div className='icon'>
            <li onClick={()=>addtocart(curElm)}><AiOutlineShoppingCart/></li>
            <li onClick={()=>view(curElm)}> <BsEye/></li>
            <li onClick={()=>addtowish(curElm)}><AiOutlineHeart/></li>
            </div>
        </div>

        <div className='detail'>
            <h3>{curElm.Title}</h3>  
            <h4>{curElm.Poet}</h4>
            <h4>{curElm.price}tk</h4>
        </div>
        
      </div>
    ))}
    
  </div>
</div>


      <div className='banner'>
        <div className='container'>
        <div className='detail'>
          <h1>Latest book is added</h1>
          <h1>Book name</h1>
          <h2>wrriter name</h2>
          <p>price amount</p>
          
          {/*  */}
          <Link to='/books' className='link' onClick={handleUserAuth}>Buy now <BsArrowRight/></Link>
   </div>
   <div className='img_box'>
   <img src={harvest} alt='sliderimg' ></img>
   </div>
</div>
</div>

    
    </>
   
  );
};

export default Home;
