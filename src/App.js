import "./App.css";
import "./css/App.css";
import "./css/Head.css";
import "./css/Calendar.css";
import "./css/Todo.css";
import "./css/Icon.css";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Home />
      <Search />
    </div>
  );
}

export default App;
