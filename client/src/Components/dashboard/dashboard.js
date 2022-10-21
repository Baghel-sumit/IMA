import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();


    function handleLogin(){
        let path = '/';
        navigate(path);
    }


    
    function handleProfile(){
      let path = '/user_profile';
      navigate(path);
    }

  return (
    <div className='dashboard'>
      hi welcome to dashboard

      <button onClick={handleLogin}>Back to Login</button>

      <button onClick={handleProfile}>Go to Profile section</button>

    </div>
  )
}

export default Dashboard;
