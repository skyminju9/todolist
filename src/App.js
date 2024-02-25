import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/signin' element={<SignInPage/>}/>
          <Route path='/signup' element={<SignUpPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
