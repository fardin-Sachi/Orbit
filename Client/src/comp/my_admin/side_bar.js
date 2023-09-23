import React, { useState } from 'react';
import { BsCart3, BsGrid1X2Fill, BsPeopleFill } from 'react-icons/bs';
import './side_bar.css';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function Side_bar({ openSidebarToggle, openUserMode, isAdmin }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleAdminView = () => {
    openUserMode(!isAdmin);
  };

  const logout = async () => {
    try {
      setLoading(true);
      setError(null);
      await signOut(auth);
      navigate('/my_admin'); // Redirect after successful logout
    } catch (err) {
      setError("Unable to logout, please try again!");
    } finally {
      setLoading(false);
    }
  };
  const handleAdminAuth = () => {
    // Check if the user is logged in
    if (!auth.currentUser) {
      // User is not logged in, redirect to the /admin route
      navigate('/my_admin');
    } 
  };
  return (
    <>
      <aside id='sidebar' className={openSidebarToggle ? 'sidebar-responsive' : ''}>
        <div className='sidebar-title'>
          <div className='sidebar-brand'>
            <BsCart3 className='icon_header' />Orbit
          </div>
          <span className='icon close_icon'>X</span>
        </div>
        <ul className='sidebar-list'>
          <li className='sidebar-list-item' onClick={handleAdminAuth}>
            <Link to='/my_admin/admin_home'>
              <BsGrid1X2Fill className='icon' /> DASHBOARD
            </Link>
          </li>

          <li className='sidebar-list-item' onClick={handleAdminAuth}>
            <Link to='/my_admin/admin_home/admin_db_total_book'>
              <BsPeopleFill className='icon' /> BOOK
            </Link>
          </li>

          <li className='sidebar-list-item' onClick={handleAdminAuth}>
            <Link to='/my_admin/admin_home/add_book_db'>
              <BsPeopleFill className='icon' /> ADD BOOK
            </Link>
          </li>

          <li className='sidebar-list-item'>
            {isAdmin ? (
              <Link to='/my_admin/' onClick={toggleAdminView}>
                User Mode
              </Link>
            ) : (
              <Link to='/user/login' onClick={toggleAdminView}>
                User Mode
              </Link>
            )}
          </li>

          <li className='sidebar-list-item'>
            <button onClick={logout}>
              <BsPeopleFill className='icon' /> LOG OUT
            </button>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Side_bar;
