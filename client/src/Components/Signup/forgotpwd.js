import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Forgotpwd = () => {
    const [succesmsg,setSuccess] = useState('');
    const [login, setLogin] = useState(true);
    function handleClick(){
        setSuccess("we have sent a message on your gmail account!");
        setLogin(false)
    }

    const navigate= useNavigate();
    function Loginpage(){
        let path  = '/';
        navigate(path);
    }

  return (
    <div className='forgotpwd'>

      <h1>Forgot password</h1>

      <input type="email" name="pwd-email" placeholder='Enter your email' required/>

      <button onClick={handleClick}>Send a mail</button>

      <p>{succesmsg}</p>

      <button disabled={login} onClick={Loginpage}>
        Login
      </button>

    </div>
  )
}

export default Forgotpwd
