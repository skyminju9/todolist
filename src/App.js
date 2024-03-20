import "./App.css";
import SearchPage from "./pages/SearchPage";
import "./css/App.css";
import "./css/Head.css";
import "./css/Calendar.css";
import "./css/Todo.css";
import "./css/Icon.css";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      <SearchPage />
    </div>
  );
}

export default App;
