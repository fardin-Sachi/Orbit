import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';
// import harryImage from '../image/harry_philosoper_stone.jpg';
import nazrul from '../image/poet_pic/IslamKaziNazrul.jpg'
import jibanando from '../image/poet_pic/jibanando.jpeg'
import rabindranath from '../image/poet_pic/rabindranath.jpg'
import jashim from '../image/poet_pic/jashim_uddin.jpeg'
import bankim_chandra from '../image/poet_pic/Bankim-Chandra-Chattopadhyay.jpg'
import { BsEye } from 'react-icons/bs';
// import harvest from '../image/The_Last_Harvest_Paintings_of_Rabindranath_Tagore_(book).jpeg'
import './Home.css'
import { auth } from './firebase';
// import booksDetail from './booksdetails';

const Home = ({ view, close, setClose, addtocart, addtowish,authorBasedBooks }) => {
  const [detail, setDetail] = useState([])
  // const [book,setBook] = useState([])
  const navigate = useNavigate()
  const fetchSomeBooksforHomepage = async () => {
    try {
      const response = await fetch('/api/books')
      if (response.ok) {
        const data = await response.json()
        const someBooksForHomepage = data.slice(0, 15)
        setDetail(someBooksForHomepage)
        // console.log(someBooksForHomepage) //Works
      } else throw new Error("Something's Wrong")
    } catch (err) {
      throw new Error("Please reload")
    }
  }
  const handleUserAuth = () => {
    // Check if the user is logged in
    if (!auth.currentUser) {
      // User is not logged in, redirect to the /admin route
      navigate('/user/login')
    }
    else return true
  }
  // const authorBasedBooks = (author) => {
  //   // const filteredBooks = booksDetail.filter((book) => book.author === author);
  //   // setBooks(filteredBooks)

  //   const lowercaseBook = author.toLowerCase(); // Convert the input to lowercase
  //   const change = booksDetail.filter((x) => {
  //     const lowercaseGenre = x.author.toLowerCase(); // Convert genre to lowercase
  //     const lowercaseTitle = x.title.toLowerCase(); 
  //     return lowercaseGenre === lowercaseBook || lowercaseBook==lowercaseTitle;
  //   });
  //   setBook(change);
    
  //   console.log(change)

  
  // }
  useEffect(() => {
    fetchSomeBooksforHomepage();
  }, []);
  return (
    <>{
      close ?
        <div className='book_detail'>
          <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineClose /></button>
            {
              detail.map((curElm) => {
                return (
                  <div className='bookbox'>
                    <div className='img_box'>
                      <img src={curElm.cover} alt={curElm.title}></img>
                    </div>
                    <div className='detail'>
                      <h2>{curElm.title}</h2>
                      <h4>{curElm.author}</h4>
                      <h3>{curElm.price}</h3>
                      <button onClick={() => auth.currentUser ? addtocart(curElm) : navigate('/user/login')}>Add to Cart</button>
                    </div>
                  </div>
                )
              })
            }

          </div>
        </div> : null
    }

      {detail.length>1?
        <div className='top_banner'>
        <div className='container'>
          <div className='detail'>
            <h2>The best Book for Collection of 2023</h2>
            <Link to='/books' className='link' onClick={handleUserAuth}>Buy now <BsArrowRight /></Link>
          </div>
          <div className='img_box'>
            <img src={detail[1].cover} alt='slidering' />
          </div>
        </div>
      </div>
      :
      null
      }

      <div className='books_type'>
        <div className='container'>
          <div className='box'>
            <div className='img_box' >
              <img src={nazrul} alt='nazrul' onClick={() => {
                  authorBasedBooks('Kazi Nazrul Islam')
                  navigate('/user/books')
                }}></img>
            </div>
            <div className='detail'>
              <p>Kazi Nazrul Islam</p>
            </div>
          </div>

          <div className='box'>
            <div className='img_box'>
              <img src={rabindranath} alt='rabindranath'  onClick={() => {
                  authorBasedBooks('Rabindranath Tagore')
                  navigate('/user/books')
                }}></img>
            </div>
            <div className='detail'>
              <p>Rabindranath Tagore</p>
            </div>
          </div>

          <div className='box'>
            <div className='img_box'>
              <img src={jashim} alt='jashim uddin'  onClick={() => {
                  authorBasedBooks('Jasim Uddin')
                  navigate('/user/books')
                }}></img>
            </div>
            <div className='detail'>
              <p>Jashim Uddin</p>
            </div>
          </div>

          <div className='box'>
            <div className='img_box'>
              <img src={bankim_chandra} alt='Bankim Chandra' onClick={() => {
                  authorBasedBooks('Bankim Chandra Chattopadhyay')
                  navigate('/user/books')
                }}></img>
            </div>
            <div className='detail'>
              <p>Bankim Chandra Chattopadhyay</p>
            </div>
          </div>

          <div className='box'>
            <div className='img_box'>
              <img src={jibanando} alt='jibanando'  onClick={() => {
                  authorBasedBooks('Jibanananda Das')
                  navigate('/user/books')
                }}></img>
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
          {detail.map((curElm) => (
            <div className='box' key={curElm._id}>
              <div className='img_box'>
                <img src={curElm.cover} alt={curElm.title} />
                <div className='icon'>
                  <li onClick={() => auth.currentUser ? addtocart(curElm) : navigate('/user/login')}><AiOutlineShoppingCart /></li>
                  <li onClick={() => view(curElm)}> <BsEye /></li>
                  <li onClick={() => auth.currentUser ? addtowish(curElm) : navigate('/user/login')}><AiOutlineHeart /></li>
                </div>
              </div>

              <div className='detail'>
                <h3>{curElm.title}</h3>
                <h4>{curElm.author}</h4>
                <h4>{curElm.price}tk</h4>
              </div>

            </div>
          ))}

        </div>
      </div>

      {detail.length>0?
        <div className='banner'>
        <div className='container'>
          <div className='detail'>
                <h1>Latest Book</h1>
                <h2>{detail[0].title}</h2>
                <h4>{detail[0].author}</h4>
                <p>{detail[0].price} Tk</p>
              
            
            <Link to='/books' className='link' onClick={handleUserAuth}>Buy now <BsArrowRight /></Link>
          </div>
          <div className='img_box'>
            {detail.length>0? <img src={detail[0].cover} alt='sliderimg' ></img>:null}
          </div>
        </div>
      </div>
      :
      null
      }
      

    </>
  );
};

export default Home;
