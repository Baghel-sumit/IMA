import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Signup/Login';
import Forgotpwd from './Components/Signup/forgotpwd';
import Dashboard from './Components/dashboard/dashboard';
import Nopage from './Components/nopage/nopage.js';
import Profile from './Components/profile/profile.js';
import EditProfile from './Components/profile/editProfile';
import ChangePwd from './Components/profile/ChangePwd';
import Ledger from './Components/Ledger/ledger.js';
import Investment from './Components/Investment/invest.js';
import Users from './Components/Users/user.js';
import Plans from './Components/Plans/plans.js';



function App() {
  

  return (
    <Router>
  
     <Routes>

      <Route index element={<Login/>} />

      <Route exact path='/forgot-pwd' element={<Forgotpwd/>} />

      <Route exact path='/dashboard' element={<Dashboard/>} />

      <Route exact path='/user_profile' element={<Profile/>} />

      <Route exact path='/update_profile' element={<EditProfile/>} />

      <Route exact path='/change_password' element={<ChangePwd/>} />
      <Route exact path='/ledger' element={<Ledger/>} />
      <Route exact path='/investments' element={<Investment/>} />
      <Route exact path='/users_all' element={<Users/>} />
      <Route exact path='/plans_all' element={<Plans/>} />

      <Route path='/*' element={<Nopage/>} />      

     </Routes>

    </Router>
  );
}

export default App;
