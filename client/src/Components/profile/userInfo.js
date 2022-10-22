import React from 'react';
import data from './data.js';


const UserInfo = () => {
  return (
    <>
    <div className='userinfo'>
      <div className='data'>

        <p>
            <span>User Name : </span> {data.name}
        </p>

        <p>
            <span>Email Id : </span> {data.email}
        </p>

        <p>
            <span>Phone : </span> {data.phone}
        </p>

        <p>
            <span>Password : </span> {data.password}
        </p>
        
      </div>

      <div className='image'>
        
        <img src={data.img} alt="UserImage" />

        <button className='btn'>Upload Image</button>
      </div>
    </div>
    </>
  )
}

export default UserInfo;
