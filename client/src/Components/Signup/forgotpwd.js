import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Forgotpwd = () => {
    const [email,setEmail] = useState('');
    const [succesmsg,setSuccess] = useState('');
    const [login, setLogin] = useState(true);
    function handleClick(event){
      if(email.length > 10){
        setSuccess("we have sent a message on your gmail account!");
        setLogin(false)
      }else{
        setSuccess("Please provide valid email address!");
      }
      event.preventDefault();
    }

    function handleChange(event){
      const value = event.target.value;
      setEmail(value);
    }

    const navigate= useNavigate();
    function Loginpage(){
        let path  = '/';
        navigate(path);
    }

  return (
    <div className='forgotpwd'>

      <h1>Forgot password</h1>
      <form onSubmit={handleClick}>

      <input type="email" name="pwd-email" placeholder='Enter your email' onChange={handleChange} value={email} required/>

      <button type='submit'>Send a mail</button>
      </form>

      <p>{succesmsg}</p>

      <button disabled={login} onClick={Loginpage}>
        Login
      </button>

    </div>
  )
}

export default Forgotpwd
