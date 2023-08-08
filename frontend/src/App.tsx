import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      {/* <h1>WE ARE PLEASURED TO SEE YOU</h1> */}
      {/* <Register></Register> */}
      <Router>
        <Routes>
          <Route path='/' element={<Register/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes> 
      </Router>

    </div>
  );
}

export default App;