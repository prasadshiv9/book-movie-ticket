import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Body from './Body';
import Book from './Book';
import Theater from './Theater';
import Confirmation from './Confirmation';
import Final from './Final';


function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route
            path="/Book/:id/:image/"
            element={<Book />}
          />
          <Route path="/Theater/:mall/:image/:name" element={<Theater />} />
    
         <Route path="/Confirmation/:name/:selected/:id/:image/:price"
            element={<Confirmation />} />
          
            <Route path="/Final/:id/:image/:selected/:total/:name" element={<Final />} />
            <Route path='*' element={<Body />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
