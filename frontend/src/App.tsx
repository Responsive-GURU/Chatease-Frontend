
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
