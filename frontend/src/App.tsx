import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SignUp from './components/Signup';
// import Register from './components/Register';
import Reg from './components/Reg';
import Login from './components/Login';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      {/* <h1>WE ARE PLEASURED TO SEE YOU</h1> */}
      {/* <Register></Register> */}
      <Router>
        <Routes>
          <Route path='/' element={<Reg/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
        </Routes> 
      </Router>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;