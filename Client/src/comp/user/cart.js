import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './cart.css'

const Cart = ({ cart, setCart }) => {
  
  
  // Increase the qty
  const incqty = (book) => {
    console.log('Incrementing book with id:', book._id);
    setCart((prevCart) => {
      return prevCart.map((curElm) =>
        curElm._id === book._id ? { ...curElm, qty: curElm.qty + 1 } : curElm
        
      );
    });
  };
  
  // Decrement the qty
  const decqty = (book) => {
    setCart((prevCart) => {
      return prevCart.map((curElm) => {
        if (curElm._id === book._id) {
          if (curElm.qty > 1) {
            return { ...curElm, qty: curElm.qty - 1 };
          } else if(curElm) {
            removebook(curElm); // Remove the book when qty is 0
            return curElm;
          }
        } else {
          return curElm;
        }
      });
    });
  };
  
  
  // Remove book
  const removebook = (book) => {
   
    if (book.qty >= 1) {
      setCart((prevCart) => prevCart.filter((x) => x._id !== book._id));
    }
  };

  // Total price
  const Totalprice = cart.reduce((price, item) => price + item.qty * item.price, 0)

  return (
    <>
      <div className='cartcontainer'>
        {cart.length === 0 && (
          <div className='emptycart'>
            <h2 className='empty'>Cart is Empty</h2>
            <Link to='user/books' className='emptycartbtn'>
              Buy Now
            </Link>
          </div>
        )}
        <div className='contant'>
          {cart.map((curElm) => (
            <div className='cart_item' key={curElm.id}>
              <div className='img_box'>
                <img src={curElm.cover} />
              </div>
              <div className='detail'>
                <div className='info'>
                  <h4>{curElm.title}</h4>
                  <h3>{curElm.author}</h3>
                  <h4>{curElm.genre}</h4>
                  <h4>{curElm.price}tk</h4>
                  <div className='qty'>
                    <button className='incqty' onClick={() => incqty(curElm)}>
                      +
                    </button>
                    <input type='text' value={curElm.qty} />
                    <button className='decqty' onClick={() => decqty(curElm)}>
                      -
                    </button>
                  </div>
                  <h4 className='subtotal'>sub total:{curElm.price * curElm.qty}tk</h4>
                </div>
                <div className='close'>
                <button onClick={() => removebook(curElm)}>
                  <AiOutlineClose />
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <>
            <h2 className='totalprice'>tk{Totalprice}</h2>
            <button className='checkout'>Checkout</button>
          </>
        )}
      </div>
    </>
  )
}

export default Cart
