import React, { useState,useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './profile.css';
import { auth } from './firebase';

const Profile = () => {
  const navigate = useNavigate()
  const {userId} = useParams()
  const [userdata, setUserdata] = useState({
    name: '',
    address:{
      country: '',
      city: '',
      postcode: '',
    },
    contact:'',
  })
  
  useEffect(() => {
    const getProfileInfo = async(e) => {
      try {
        const response = await fetch(`/api/user/${userId}`)
        if (response.ok) {
          const data = await response.json();
          setUserdata(data);
        }
        else console.log("Error fetching user data")
      }catch (error){
        console.error("Try Again", error)
      }
    }
    getProfileInfo()
  },[userId])

  const updateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/user/${userdata}`, {
        method: "PATCH",
        body: JSON.stringify(userdata),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      if (response.ok) {
        alert("Profile Info Updated Successfully")
        navigate('/user/profile')
      } else console.log("Error updating book");
    } catch (error) {
      console.error("Try Again!", error);
    }
  }
  const deleteProfile = async(e) => {

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    const [field, subfield] = name.split('.')
    setUserdata((prevData) => ({
      ...prevData,
      [field]: {
        ...prevData[field],
        [subfield]: value,
      },
    }));
  };
  
  return (
    <>
      <div className="profile-page">
        <div className="profile-card">
          <h1>My Profile</h1>

          <div className="name-address-card">
            <div className="name-card">
              <h2>User Info</h2>
              <p><strong>Name: </strong>Fardin Ahsan {/* {userdata.name} */}</p>
              <p><strong>Email: </strong>{auth.currentUser ?auth.currentUser.email:navigate('/user/login')}</p>
            </div>
            <div className="address-card">
              <h2>Address</h2>
              <p><strong>Country: </strong>Bangladesh</p>
              <p><strong>City: </strong>Khulna</p>
              <p><strong>Postcode: </strong>9208</p>
              <p><strong>Contact: </strong>01516532740</p>
            </div>
          </div>

          <div className="edit-card">
            <h2>Edit Profile</h2>
            <form onSubmit={updateProfile}>
              <input
                type='text'
                // id="lname"
                name="name"
                placeholder="Full Name"
                value={userdata.name}
                onChange={handleChange}
              />
              <input
                type='text'
                // id="lname"
                name="address.country"
                placeholder='Country'
                value={userdata.address.country}
                onChange={handleChange}
                />

              <input
                type='text'
                // id="lname"
                name="address.city"
                placeholder='City'
                value={userdata.address.city}
                onChange={handleChange}
                />
              <input
                type='text'
                // id="lname"
                name='address.postcode'
                placeholder="PostCode"
                value={userdata.address.postcode}
                onChange={handleChange}
                />
              <input
                type="text"
                // id="lname"
                name='contact'
                placeholder="Contact"
                value={userdata.contact}
                onChange={handleChange}
                />
              <input type="submit" value="Submit" />
            </form>
          </div>

          {/* <div className="wishlist-cart">
            <div className="wishlist-card">
              <h2>Wishlist</h2>
              <ul>
                You can add empty <li> elements here
              </ul>
            </div>
            <div className="cart-card">
              <h2>Cart</h2>
              <ul>
                You can add empty <li> elements here
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Profile