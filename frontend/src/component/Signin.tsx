import { TextField} from '@mui/material';
import {Button} from '@mui/material';
import {Grid,Stack} from '@mui/material'
import React, {useRef} from 'react';
import { useNavigate} from 'react-router-dom';
import logo from '../image/logo.jpg'
import Link from '@mui/material/Link';
import chat from '../image/chat.jpg'
import axios from 'axios'
import { Navigate } from 'react-router-dom';
 const Signin=()=>{
    const emailValue=useRef<HTMLInputElement>(null)
    const passwordValue=useRef<HTMLInputElement>(null)
    const navigate = useNavigate();
   
    const type1=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
       
        const email=emailValue.current?.value || '';
        const pass=passwordValue.current?.value || '';
        axios.post("http://localhost:8080/chatease/login",{email:email,password:pass}).then((response)=>{
        if(response.status===200){
          navigate("/chatease/homepage/$encodeURIComponent(email)");
        }}
        ).catch((e)=>{
          console.log(e);
        })
        }   
    const resetPassword = () =>{
      navigate("/chatease/reset");
    }
  return(
    <Grid container>
        <Grid container justifyContent="space-between" sx={{borderBottom:'2px solid blue',backgroundColor:"lightBlue", padding:'15px 5px',position:'sticky',top:'0px'}}>
          <Grid item display="flex" justifyContent="center" alignItems="center">
            <img src={logo} alt="asa" width="20%"></img>
            <span style={{color:"black",marginLeft:"30px"}}>CHATEASE</span>
          </Grid>
        </Grid>
        <Grid container> 
          <Grid item sx={{height:520,width:650,backgroundImage:`url(${chat})`}}></Grid>
          <Grid container sx={{width:400,height:490,my:2,mx:'auto'}}>
            <Grid container my={3} justifyContent="center"><img src={logo} alt="asa" width="10%" height="40%"></img><span style={{color:"blue",fontSize:"22px"}}>LOGIN</span></Grid>
            <Grid container my={1} justifyContent="center">
              <form onSubmit={type1}>
                  <Grid item my={2}><TextField required  inputRef={emailValue} type="email" label="email"></TextField></Grid> 
                  <Grid item my={5}><TextField required  inputRef={passwordValue} type="password" label="password"></TextField></Grid>
                  <Grid item my={4} mx={1}>
                      <Stack spacing={2} direction="row">
                        <Link  href="" onClick={resetPassword}>Forgot password?</Link>
                        <Button type="submit" variant="contained" size="small">LOGIN</Button>
                      </Stack>
                  </Grid>
              </form>
            </Grid>
          </Grid> 
        </Grid>
    </Grid>
  )}
export default Signin;

