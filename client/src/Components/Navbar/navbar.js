import React from 'react';
import { Link } from 'react-router-dom';
import data from '../profile/data';

const Navbar = () => {
  const location = window.location.pathname;
  

  return (
    <div className='Navbar'>

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/ledger">Ledger</Link>

      <Link to="/investments">Investment</Link>

      <Link to="/users_all">Users</Link>

      <Link to="/plans_all">Plans</Link>

      <div className='nav-profile'>
          <img src={data.img} alt="user_img" />
          <Link to="/user_profile" className='first'>view Profile</Link>
          <Link to="/" className='first'>LogOut</Link>
      </div>
    </div>
  )
}

export default Navbar
