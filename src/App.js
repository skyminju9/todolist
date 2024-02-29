import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';


import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Home from './pages/Home';

function App() {

  const [LoggedIn, setLoggedIn] = useState(false);
  

  const handleSignIn = () => {
    setLoggedIn(true);
  }

  const handleLogout = () => {
    localStorage.remove('user');
    setLoggedIn(false);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/signin' element={<SignInPage onSignIn={handleSignIn}/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
          <Route path='/home' element={<Home/>}/>  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
