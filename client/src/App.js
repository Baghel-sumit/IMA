import React,{useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Signup/Login';
import Forgotpwd from './Components/Signup/forgotpwd';
import Dashboard from './Components/dashboard/dashboard';




function App() {
  return (
    <BrowserRouter>

     <Routes>

      <Route path='/' element={<Login/>} />

      <Route path='/forgot-pwd' element={<Forgotpwd/>} />

      <Route path='/dashboard' element={<Dashboard/>} />

      

     </Routes>

    </BrowserRouter>
  );
}

export default App;
