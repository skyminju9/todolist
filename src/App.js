import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./css/App.css";

import Edit from "./pages/Edit";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Start from "./pages/Start";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Detail from "./pages/Detail";

import Setting from "./pages/Settings/Setting";
import FontSetting from "./pages/Settings/Font";
import UserSetting from "./pages/Settings/User";
import { styled, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/Setting/Theme";

const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  font-family: ${(font) => font.fonts}, sans-serif;
`;

function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [theme, setTheme] = useState("light");
  const [font, setFont] = useState("Inter");

  const changeFontI = () => {
    setFont("Inter");
  };
  const changeFontG = () => {
    setFont("Gaegu");
  };
  const changeFontS = () => {
    setFont("Sunflower");
  };
  const changeFontD = () => {
    setFont("Dongle");
  };

  const toggleTheme = () => {
    setTheme(() => {
      return theme === "dark" ? "light" : "dark";
    });
  };

  const handleSignIn = () => {
    setLoggedIn(true);
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Container fonts={font}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Start />} />
            <Route
              path="/SignIn"
              element={<SignIn onSignIn={handleSignIn} />}
            />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Edit" element={<Edit />} />
            <Route path="/Detail" element={<Detail id={1} />} />
            <Route path="/Setting/user" element={<UserSetting />} />
            <Route
              path="/Setting"
              element={
                <Setting toggle={toggleTheme} thema={theme} font={font} />
              }
            />
            <Route
              path="/Setting/font"
              element={
                <FontSetting
                  thema={theme}
                  font={font}
                  click1={changeFontI}
                  click2={changeFontG}
                  click3={changeFontS}
                  click4={changeFontD}
                />
              }
            />
          </Routes>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
