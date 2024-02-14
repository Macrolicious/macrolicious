import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li><Link to="/home" className= 'text-blue-500'>Home</Link></li>
            <li><Link to="/login" className= 'text-blue-500'>Login</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;