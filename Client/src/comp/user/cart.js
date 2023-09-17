import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './cart.css'

const Cart = ({cart,setCart}) => {
//increase the qty
const incqty=(book)=>{
    const exist=cart.find((x)=>{
        return x.id === book.id
    })
    setCart(cart.map((curElm)=>
    {
        return curElm.id=book.id ? {...exist, qty: exist.qty+1}:curElm
    }))
}

//decrement the qty

const decqty=(book)=>{
    const exist=cart.find((x)=>{
        return x.id === book.id
    })
    setCart(cart.map((curElm)=>
    {
        return curElm.id=book.id ? {...exist, qty: exist.qty-1}:curElm
    }))
}

//total price
const Totalprice = cart.reduce((price,item) => price+item.qty*item.price,0)
  return (
    <>
          <div className='cartcontainer'>
            {cart.length===0 && 
             <div className='emptycart'>
                <h2 className='empty'>Cart is Empty</h2>
                <Link to='user/books' className='emptycartbtn'>Buy Now</Link>
             </div> }
        <div className='contant'>
            {
                cart.map((curElm)=>
                {
                    return(
                        <>
                            <div className='cart_item'>
                                <div className='img_box'>
                                    <img src={curElm.Img}></img>
                                </div>
                                <div className='detail'>
                                    <div className='info'>
                                    <h4>{curElm.Title}</h4>
                                        <h3>{curElm.Poet}</h3>
                                        <h4>{curElm.genre}</h4>
                                        <h4>{curElm.price}tk</h4>
                                    </div>

                                        <div className='qty'>
                                            <button className='incqty' onClick={()=>incqty(curElm)}>+</button>
                                            <input type='text' value={curElm.qty}></input>
                                            <button className='decqty' onClick={()=>decqty(curElm)}>-</button>
                                        </div>
                                        <h4>sub total:{curElm.price * curElm.qty}tk</h4>
                                        <button><AiOutlineClose/></button>
                                </div>
                               

                            </div>
                        </>
                    )
                })
            }
        </div>

        {
            cart.length>0 && 
            <>
                <h2 className='totalprice'>tk{Totalprice}</h2>
                <button className='checkout'>Checkout</button>
            </>
          }
                  

    </div>
    </>
  
  )
}

export default Cart