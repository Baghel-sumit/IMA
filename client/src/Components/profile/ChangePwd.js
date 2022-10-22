import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/navbar';


const ChangePwd = () => {
    const navigate = useNavigate();
    const [passwords, setPasswords] = useState({
        old : '',
        new : ''
    });

    const [message, setMsg] = useState('');

    function handleProfile(event){
        

        const oldPwd = passwords.old, newPwd = passwords.new;

        if((oldPwd.length > 0 && newPwd.length > 0) && oldPwd != newPwd){

            setMsg('Hey! you have successFully changed your password!');

            navigate(-1);
            
        }else if (oldPwd === newPwd){

            setMsg('Hey! Please choose a specific password!');

        }
        
        

        event.preventDefault();
    }

    function handleChange(event){
        const {name,value} = event.target;

        setPasswords((prev)=>{

            return {

                ...prev,
                [name] : value
            }
        })
    }

  return (
    <>
    <Navbar/>
    <div className='changePwd'>

      <h1>Change Password</h1>

        <p>{message}</p>

      <form onSubmit={handleProfile}>

        <input type="password" name='old' placeholder='Enter Old Password' value={passwords.old} onChange={handleChange} required/>

        <input type="password" name='new' placeholder='Enter New Password' value={passwords.new} onChange={handleChange} required/>

        <button className='btn' type='submit'>Update Password</button>
        
      </form>

    </div>
    </>
  )
}

export default ChangePwd;
