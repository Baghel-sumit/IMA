import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    function handleClick(){
        let path = '/';
        navigate(path);
    }

  return (
    <div className='dashboard'>
      hi welcome to dashboard

      <button onClick={handleClick}>Back to Login</button>
    </div>
  )
}

export default Dashboard;
