import React from 'react' 
import {Grid} from '@mui/material'
import logo from '../image/logo.jpg'
import chat from '../image/chat.jpg'
import { useNavigate} from 'react-router-dom'
import { Register } from './Register'
import { Route,Routes} from 'react-router-dom'
import { useRef,useState} from 'react'
import Homepage from './Homepage'
const Frontpage=()=>{
    const navigate=useNavigate()
    const value2=useRef<HTMLInputElement>(null)
    const value3=useRef<HTMLInputElement>(null)
  
     ////const { email} = useParams<{ email: string}>();
    const type1=(e:React.FormEvent<HTMLFormElement>)=>{//React.FormEvent is the type
        e.preventDefault();//cancels the event if it is cancellablehis is done using the preventDefault() method of an event. The preventDefault() method of an event is used to stop a cancelable event from executing.
       
        const email1=value2.current?.value || '';
        const pass1=value3.current?.value || '';
          navigate("/chatease/homepage");
    }
      
      
  return(
    <Grid container>
       <Grid container justifyContent="space-between" sx={{borderBottom:'2px solid blue',backgroundColor:"lightBlue", padding:'15px 5px',position:'sticky',top:'0px'}}>
         <Grid item display="flex" justifyContent="center" alignItems="center">
          <img src={logo} alt="asa" width="20%"></img>
          <span style={{color:"black",marginLeft:"30px"}}>CHATEASE</span>
         </Grid>
          {/*        
                  <Grid item display="flex"  justifyContent="space-between" alignItems="center">
                    <Button variant="outlined" size="small" style={{color:"black"}} onClick={signup}>Signup</Button>
                    <Button variant="outlined" size="small" style={{color:"black"}} onClick={login}>login</Button>
                  </Grid> */}
      </Grid>
      <Grid container> 
       <Grid item sx={{height:520,width:650,backgroundImage:`url(${chat})`}}></Grid>
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