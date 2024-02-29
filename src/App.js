import Detail from './pages/Detail';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './pages/Edit';

function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path ="/" element={<Detail/>} />
          <Route path ="/edit" element={<Edit/>} />
          
        </Routes>
        
      </div>
    </BrowserRouter>
    
    
  );
}

export default App;
