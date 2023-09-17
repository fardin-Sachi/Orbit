import React from 'react';
import { BsCart3, BsGrid1X2Fill, BsPeopleFill } from 'react-icons/bs';
import './side_bar.css';
import { Link } from 'react-router-dom';

function Side_bar({ openSidebarToggle, openUserMode, isAdmin }) {
  const toggleAdminView = () => {
    openUserMode(!isAdmin);
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
          <li className='sidebar-list-item'>
            <Link to='/my_admin/admin_home'>
              <BsGrid1X2Fill className='icon' />DASHBOARD
            </Link>
          </li>

          <li className='sidebar-list-item'>
            <Link to='/my_admin/admin_home/admin_db_total_book'>
              <BsPeopleFill className='icon' />BOOK
            </Link>
          </li>

          <li className='sidebar-list-item'>
            <Link to='/my_admin/admin_home/add_book_db'>
              <BsPeopleFill className='icon' />ADD BOOK
            </Link>
          </li>

          <li className='sidebar-list-item'>
            <Link to='/my_admin/admin_home/updated_book_list'>
              <BsPeopleFill className='icon' />UPDATE BOOK
            </Link>
          </li>

          <li className='sidebar-list-item'>
          {isAdmin ? (
    <Link to='/my_admin/' onClick={toggleAdminView}>
      User Mode
    </Link>
  ) : (
    <Link to='/user/login' onClick={toggleAdminView}>
      User MOde
    </Link>
  )}
          </li>

        

          <li className='sidebar-list-item'>
            <Link href=''>
              <BsPeopleFill className='icon' />LOG OUT
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Side_bar;
