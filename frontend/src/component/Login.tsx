import React, { useState,useRef, useEffect} from 'react';
import { useNavigate,Routes,Route} from 'react-router-dom';
// import Register from '../component/Register';
import TextField from '@mui/material/TextField'
import axios from 'axios';
import Button from '@mui/material/Button'
import { Box, Grid, Stack, ThemeProvider, Typography, createTheme } from '@mui/material';
import logo from './image.png'
import Link from '@mui/material/Link';
const theme = createTheme({
  typography: {
    h5: {
      color: 'blue',
    },
  },
}); 

function Login(){
    const navigate= useNavigate()
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userEmail = email.current?.value || "";
        const userPassword = password.current?.value || "";
        console.log("hello")
        console.log(userEmail+" "+userPassword)
        
        axios.post('http://localhost:8080/login', {username:userEmail, password:userPassword}).then((response)=>{

          if(response.data.loginStatus){
          alert(response.data.message)
          navigate('/home')
          }

        }).catch((error)=>{
            console.log("error",e)
        })
    }

    const passwordReset=()=>{
      navigate('/chatease/login')
   }
    return(
    <div>
    {/* <form onSubmit={handleSubmit}>
        <TextField required
          type='email'
          id="email"
          label="Email"
          inputRef={email}
        />
        <TextField required
          type='password'
          id="password"
          label="Password"
          inputRef={password}
        />
      
        <Button variant="contained" type="submit" size={"large"} id="login-button">
          LOGIN
        </Button>
    </form>
          <Button variant="contained" onClick={()=>{
            navigate('/')
          }}>
          REGISTER
        </Button> */}



<Box sx={{width:400,height:550,border:'2px solid blue',borderRadius: '20px',my:5,mx:'auto'}}>
    <Grid container my={5} justifyContent="center">
      <img src={logo} alt="asa" width="9%" height="9%"></img>
      <ThemeProvider theme={theme} >
        <Typography variant="h5">LOGIN</Typography></ThemeProvider>
    </Grid>
    <Grid container my={3} justifyContent="center">
      <form onSubmit={handleSubmit}>
         <Grid item my={6}>
          <Box>
            <TextField required  inputRef={email} type="text" label="username">
              </TextField>
          </Box>
        </Grid>
        <Grid item my={5}>
          <Box>
            <TextField required  inputRef={password} type="password" label="password">
            </TextField>
          </Box>
        </Grid>
          <Grid item my={4} mx={2}>
            <Stack spacing={4} direction="column">
              {/* <Button type="submit" variant="contained" size="large">REGISTER</Button> */}
              {/* <Button variant="contained" onClick={()=>{
                navigate('/')
                }}>
                REGISTER
              </Button>  */}
              <Link onClick={passwordReset}>Forgot password</Link>
              <Button type="submit" variant="contained" size="large">LOGIN</Button>
            </Stack>
          </Grid>
      </form>
</Grid>
</Box>
    </div>
  )
}
export default Login;