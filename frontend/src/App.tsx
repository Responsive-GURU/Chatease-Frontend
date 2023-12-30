
import './App.css';

import { Register } from './component/Register';
import Signin from './component/Signin';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './component/Homepage';
import Frontpage from './component/Frontpage';
import Forgot from './component/Forgot';
import Profile from './component/Profile';
import PrimarySearchAppBar from './component/PrimarySearchAppBar';
import PostCard from './component/PostCard';
import { Container, CssBaseline } from '@mui/material';
import AddPostForm from './component/AddPostForm';
import { Display } from './Display';
import HoverIcons from './component/HoverIcons';
 function App(){

  const handlePostSubmit = (caption:any, image:any) => {
    // Implement your logic to submit the post with caption and image
    console.log('Caption:', caption);
    console.log('Image:', image);
  };
  
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/chatease" element={<Frontpage/>} />
          <Route path="/chatease/login" element={<Signin/>} />
          <Route path="/chatease/homepage/:email" element={<Homepage/>}></Route>
          {/* <Route path="/chatease/register" element={<Register/>}></Route> */}
          <Route path='/chatease/reset' element={<Forgot/>}></Route>   
      </Routes>
    </BrowserRouter> 
  )
}
export default App;
