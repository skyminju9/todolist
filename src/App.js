import "./css/App.css";
import Edit from "./pages/Edit";

import Home from "./pages/Home";
import Search from "./pages/Search";

import { Routes, Route } from "react-router-dom";
import Setting from "./pages/Setting";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Edit" element={<Edit />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>
    </div>
  );
}

export default App;
