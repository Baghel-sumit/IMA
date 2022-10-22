import React from 'react'
import { useNavigate } from 'react-router-dom';
import UserInfo from './userInfo.js';
import Navbar from '../Navbar/navbar.js';

const Profile = () => {
    const navigate = useNavigate();
    
    function handleLogout(){
        let path = '/';
        navigate(path);
    }

    function handleEditP(){
        let path = '/update_profile';
        navigate(path); 
    }

    function handleChangePwd(){
        let path = '/change_password';
        navigate(path); 
    }
    
  return (
    <>
    <Navbar/>
    <div className='profile'>
      <h1>Profile</h1>

        <UserInfo/>

      <div>
        <button className='btn' onClick={handleEditP}>Edit Profile</button>

        <button className='btn' onClick={handleChangePwd}>Change Password</button>
        
        <button className='btn btn1' onClick={handleLogout}>Logout</button>
      </div>
    </div>
    </>
  )
}

export default Profile
