import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
  const [emailPwd , setEmailPwd] = useState({
    email : '',
    password : ''
  });
  

  function handleChange(event){
    const {name, value} = event.target;

    setEmailPwd((prev)=>{
      return {
        ...prev,
        [name] : value
      }
    })
  }
  
  const navigate = useNavigate();
  function handleSubmit(event){
    let items = {
      email : emailPwd.email,
      password : emailPwd.password
    };
    
    let path = items.email.length > 0 && items.password.length > 0 ? '/dashboard':'/';
    navigate(path);
    event.preventDefault();
  }

  return (
    <div className='login'>

      <h1>  Login  </h1>  {/* Heading to Login */}

      <form >

        <input type="email" name="email" id="email" placeholder='Enter your email' value={emailPwd.email} onChange={handleChange} required/>  {/* input box for email id */}

        <input type="password" name="password" id="pwd" placeholder='Password' value={emailPwd.password} onChange={handleChange} required/>   {/* input box for password */}

        <div className='container'>   {/* checkbox and forgot password container */}

          <div>  {/* checkbox and remember me txt division */}

            <input type="checkbox" name="chkbx" id="chkbx" />   

            <p>

              Remember me

            </p>

          </div>

          <div>   {/* forgot password achor tag link */}

            <a href="./forgot-pwd"> Forgot password? </a>

          </div>

        </div>


        <button type="submit" onClick={handleSubmit}> Login </button>    {/* Login button at end */}

      </form>
    </div>
  )
}

export default Login;
