import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Signup/Login';
import Forgotpwd from './Components/Signup/forgotpwd';
import Dashboard from './Components/dashboard/dashboard';
import Nopage from './Components/nopage/nopage.js';
import Profile from './Components/profile/profile.js';
import EditProfile from './Components/profile/editProfile';
import ChangePwd from './Components/profile/ChangePwd';



function App() {
  return (
    <BrowserRouter>

     <Routes>

      <Route path='/' element={<Login/>} />

      <Route path='/forgot-pwd' element={<Forgotpwd/>} />

      <Route path='/dashboard' element={<Dashboard/>} />

      <Route path='/user_profile' element={<Profile/>} />

      <Route path='/user_profile/update_profile' element={<EditProfile/>} />

      <Route path='/user_profile/changePwd' element={<ChangePwd/>} />

      <Route path='/*' element={<Nopage/>} />      

     </Routes>

    </BrowserRouter>
  );
}

export default App;
