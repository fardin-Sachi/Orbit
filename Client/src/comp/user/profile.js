import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './profile.css';

const Cart = ({ cart, setCart }) => {
  return (
    <>
      <div className="profile-page">
        <div className="profile-card">
          <h1>My Profile</h1>

          <div className="name-address-card">
            <div className="name-card">
              <h2>Name</h2>
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Email:</strong> millenniumrahman@gmail.com</p>
            </div>
            <div className="address-card">
              <h2>Address</h2>
              <p><strong>Country:</strong> New York</p>
              <p><strong>City:</strong> New York</p>
              <p><strong>Postcode:</strong> 12345</p>
              <p><strong>Contact:</strong> +1 123-456-7890</p>
            </div>
          </div>

          <div className="edit-card">
            <h2>Add Details</h2>
            <form action="/action_page.php">
              <input type="text" id="lname" placeholder="Full Name" />
              <input type="text" id="lname"  placeholder="Country" />

              <input type="text" id="lname" placeholder="City" />
              <input type="text" id="lname"  placeholder="PostCode" />
              <input type="text" id="lname"  placeholder="Contact" />

              <input type="submit" value="Submit" />
            </form>
          </div>

          <div className="wishlist-cart">
            <div className="wishlist-card">
              <h2>Wishlist</h2>
              <ul>
                {/* You can add empty <li> elements here */}
              </ul>
            </div>
            <div className="cart-card">
              <h2>Cart</h2>
              <ul>
                {/* You can add empty <li> elements here */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
