import React, {useState} from "react";

import "./css/App.css";

import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MainPage from './pages/MainPage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import Setting from './pages/Search';

import { Routes, Route } from "react-router-dom";

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  

  const handleSignIn = () => {
    setLoggedIn(true);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/SignIn' element={<SignInPage onSignIn={handleSignIn}/>}/>
        <Route path='/SignUp' element={<SignUpPage/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
