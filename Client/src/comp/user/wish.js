import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './wish.css'

const Wish = ({wish,setWish}) => {
    const removebook = (book) => {
        if (book.qty > 0) {
          setWish((prevWish) => prevWish.filter((x) => x._id !== book._id));
        }
      };

  return (
    <>
  
          <div className='wishcontainer'>
            <h1>Wish List</h1>
            {wish.length===0 && 
             <div className='emptywish'>
                <h2 className='empty'>wish is Empty</h2>
                <Link to='/books' className='emptywishbtn'>Buy Now</Link>
             </div> }
        <div className='contant'>
            {
                wish.map((curElm)=>
                {
                    return(
                        <>
                            <div className='wish_item'>
                                <div className='img_box'>
                                    <img src={curElm.cover}></img>
                                </div>
                                <div className='detail'>
                                    <div className='info'>
                                    <h4>{curElm.title}</h4>
                                        <h3>{curElm.author}</h3>
                                        <h4>{curElm.genre}</h4>
                                        <h4>{curElm.price}tk</h4>
                                    </div>
                                    <div className='close'>
                <button onClick={() => removebook(curElm)}>
                  <AiOutlineClose />
                </button>
                </div>

                                      
                                </div>
                               

                            </div>
                        </>
                    )
                })
            }
        </div>

        
                  

    </div>
    </>
 )
}

export default Wish