import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/navbar';


const EditProfile = () => {
    const navigate = useNavigate();

    const [info,setInfo] = useState({
        name : '',
        email : '',
        number : ''
    });

    function handleChange(event){

        const {name,value} = event.target;

        setInfo((prev)=>{
            return {
                ...prev,
                [name] : value
            }
        })
    }

    function handleSubmit(event){
        let objInfo = {
            name : info.name,
            email : info.email,
            phone : info.phone
        }
        

        navigate(-1);
        
        event.preventDefault();
    }
  return (
    <>
    <Navbar/>
    <div className='EditProfile'>

      <h1>Update Profile</h1>

      <form onSubmit={handleSubmit}>

        <input type="text" name='name' placeholder='Enter Your Name' value={info.name} onChange={handleChange} required/>

        <input type="email" name='email' placeholder='Enter Your Email' value={info.email} onChange={handleChange} required/>

        <input type="number" name='number' placeholder='Enter Your Phone' value={info.number} onChange={handleChange} required/>

        <button className='btn' type='submit'>Update Profile</button>

      </form>
      
    </div>
    </>
  )
}

export default EditProfile;
