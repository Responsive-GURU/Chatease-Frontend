import React from 'react' 
import {Grid} from '@mui/material'
import logo from '../image/logo.jpg'
import chat from '../image/chatease.png'
import { Register } from './Register'
import { Route,Routes} from 'react-router-dom'
import Homepage from './Homepage'
const Frontpage=()=>{    
  return(
    <Grid container>
      <Grid container> 
       <Grid item sx={{height:550,width:650}} className='background-image-container'>
       </Grid>  
       <Grid container sx={{width:400,height:490,my:2,mx:'auto'}}>
        <Register/>
       </Grid>
      </Grid>
      <Routes>
      <Route path="/chatease/homepage" element={<Homepage/>} /> 
      </Routes>
    </Grid>
  )
}
export default Frontpage;


