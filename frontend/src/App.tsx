
import './App.css';

import { Register } from './component/Register';
import Signin from './component/Signin';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './component/Homepage';
import Frontpage from './component/Frontpage';
import Forgot from './component/Forgot';
import Profile from './component/Profile';
import PrimarySearchAppBar from './component/PrimarySearchAppBar';

 function App(){
  return (
    <>  
<<<<<<< HEAD
    {/* <PrimarySearchAppBar/>
    <Profile/> */}
=======
    <PrimarySearchAppBar/>
    {/* <Profile/> */}
>>>>>>> 392e8acfe0ebccc183fe14433bcd9c32e1d28901
    <BrowserRouter>
      <Routes>
          <Route path="/chatease" element={<Frontpage/>} />
          <Route path="/chatease/login" element={<Signin/>} />
          <Route path="/chatease/homepage/:email" element={<Homepage/>}></Route>
          {/* <Route path="/chatease/register" element={<Register/>}></Route> */}
          <Route path='/chatease/reset' element={<Forgot/>}></Route>   
      </Routes>
    </BrowserRouter> 
  </>)
}
export default App;
