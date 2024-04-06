import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { styled, ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "../../components/Setting/Theme";

import Setting from "./Setting";
import FontSetting from "./Font";
import UserSetting from "./User";

const Container = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  font-family: ${(font) => font.fonts}, sans-serif;
`;

const SettingRouter = () => {
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

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Container fonts={font}>
        <div className="App">
          <Routes>
            <Route
              path="/Setting"
              element={
                <Setting toggle={toggleTheme} thema={theme} font={font} />
              }
            />
            <Route path="Setting/user" element={<UserSetting />} />
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
};

export default SettingRouter;
