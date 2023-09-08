import React from 'react'
import Booksdetail from './booksdetails'
import './books.css'

import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { BsEye } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import booksdetail from './booksdetails';
import {AiOutlineClose} from 'react-icons/ai'

const Books = ({book,setBook,detail,view,close,setClose,addtocart}) => {
    

    const filterbook = (genre) => {
        if (genre === 'All Books') {
            setBook(Booksdetail);
        } else {
            const filteredBooks = Booksdetail.filter((book) => book.genre === genre);
            setBook(filteredBooks);
        }
    };
    const AllBooks=()=>{
        setBook(Booksdetail)
    }
    return (
        <>
        {
        close?
        <div className='book_detail'>
        <div className='container'>
            <button onClick={() => setClose(false)} className='closebtn'><AiOutlineClose/></button>
            {
                detail.map((curElm)=>{
                    return(
                        <di className='bookbox'>
                            <div className='img_box'>
                                <img src={curElm.Img} alt={curElm.Title}></img>
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
           



            <div className='book'>
            <h3>Books</h3>
            <p>Home . books</p>
                <div className='container'>
                    <div className='filter'>
                        <div className='categories'>
                            <h3>catagories</h3>
                            <ul>
                                <li onClick={()=> AllBooks()}>All Books</li>
                                <li onClick={()=> filterbook('romantic')}>Romantic</li>
                                <li onClick={()=> filterbook('drama')}>Drama</li>
                                <li onClick={()=> filterbook('comedy')}>Comedy</li>
                                <li onClick={()=> filterbook('science_fiction')}>Science fiction</li>
                                <li onClick={()=> filterbook('detective')}>Detective</li>
                                <li onClick={()=> filterbook('tragedy')}>Tragedy</li>
                            </ul>
                        </div>

                    </div>
                    <div className='booksbox'>
                        <div className='contant'>
                            {
                                book.map((curElm) => {
                                    return (
                                        <>
                                            <div className='box' key={curElm.id}>
                                                <div className='img_box'>
                                                    <img src={curElm.Img} alt={curElm.Title} />
                                                    <div className='icon'>
                                                        <li onClick={()=>addtocart(curElm)}><AiOutlineShoppingCart /></li>
                                                        <li onClick={()=>view(curElm)}> <BsEye /></li>
                                                        <li><AiOutlineHeart /></li>
                                                    </div>
                                                </div>

                                                <div className='detail'>
                                                    <h3>{curElm.Title}</h3>
                                                    <h4>{curElm.Poet}</h4>
                                                    <h4>{curElm.price}tk</h4>
                                                </div>

                                            </div>
                                        </>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Books