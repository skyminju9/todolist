import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SignIn from './pages/SignIn';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/signin' element={<SignIn/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
