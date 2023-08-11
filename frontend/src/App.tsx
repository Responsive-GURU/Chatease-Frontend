
import './App.css';

import { Register } from './component/Register';
import Signin from './component/Signin';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './component/Homepage';
import Frontpage from './component/Frontpage';

 function App(){
 
  return (
    <>  
    <BrowserRouter>
      <Routes>
          <Route path="/chatease" element={<Frontpage/>} />
          <Route path="/chatease/login" element={<Signin/>} />
          <Route path="/chatease/homepage" element={<Homepage/>}></Route>
          <Route path="/chatease/register" element={<Register/>}></Route>
         
      </Routes>
</BrowserRouter> 
  </>
  );
}
export default App;















// import React from 'react';
// import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import SignUp from './components/Signup';
// // import Register from './components/Register';
// import Reg from './components/Reg';
// import Login from './components/Login';
// import Home from './components/Homepage';
// function App() {
//   return (
//     <div className="App">
//       {/* <h1>WE ARE PLEASURED TO SEE YOU</h1> */}
//       {/* <Register></Register> */}
//       <Router>
//         <Routes>
//           <Route path='/' element={<Reg/>} />
//           <Route path='/login' element={<Login/>}/>
//           <Route path='/home' element={<Home/>}/>
//         </Routes> 
//       </Router>
//       {/* <Home></Home> */}
//     </div>
//   );
// }

// export default App;