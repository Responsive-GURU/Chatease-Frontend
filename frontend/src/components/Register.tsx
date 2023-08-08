import { Alert, Box, Button, Grid, Snackbar, Stack, TextField, Typography } from "@mui/material";
import React, { useRef } from "react";
import axios from "axios";
import logo from './image.png'
import {ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material';
import { useNavigate } from "react-router-dom";
import GoogleIcon from '@mui/icons-material/Google';
function Register(){

  const navigate = useNavigate();
  
  const theme = createTheme({
    typography: {
      h5: {
        color: 'blue',
      },
    },
  });
    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const cpassword = useRef<HTMLInputElement>(null);


    const [message, setMessage] = React.useState(false);

    const handleClick = () => {
    };

    const handleClose = () => {
      setMessage(false);
    };

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
      e.preventDefault()
      const userName = name.current?.value || '';
      const userEmail = email.current?.value || "";
      const userPassword = password.current?.value || "";
      const userCpassword = cpassword.current?.value || "";
      
    //  const regex=new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$!@%^&*()]).{8,}')//?= positive lookahead doesnot need order
    // if(regex.test(userPassword)){

    // }
      
      if(userPassword === userCpassword){
        // console.log("hello")
        axios.post('http://localhost:8080/signup',{username:userName,email:userEmail,password:userPassword}).then((response)=>{
          // console.log(response.data.)
          const status = response.data.reg;
          if(status=== true)
          {
            // alert(response.data.message);
            navigate('/login')
            setMessage(true);
          }
        }).catch((error)=>{
          console.log(error)
        })
      }
    }
    return(
        <div>
       



    <Box sx={{width:400,height:550,border:'2px solid skyblue',borderRadius: '20px',my:5,mx:'auto'}}>
      <Grid container justifyContent="center" my={5}><img src={logo} alt="asa" width="9%" height="9%"></img><ThemeProvider theme={theme}><Typography variant="h5">REGISTER</Typography></ThemeProvider></Grid>
    <Grid container justifyContent="center" my={5}>
      <form onSubmit={handleSubmit}>               
        <Grid item>
        <TextField required
            id="userName"
            label="NAME"
            name="name"
            inputRef = {name}
            />
        </Grid>

        <Grid item my = {3}>
                <TextField required
                id="userEmail"
                label="EMAIL"
                type="email"
                name="email"
                inputRef={email}
                />  
        </Grid>
            
        <Grid item >
          <TextField required 
              id="userPassword"
              type="password"
              name="password"
              label="Password"
              inputRef={password}
              // helperText={"Must contain 8 Characters which includes uppercase lowercase symbols and numbers"}
            />
        </Grid>

            

        <Grid item my = {3}>
          <TextField required
            id="userCpassword"
            type="password"
            name="cpassword"
            label="Conform Password"
            inputRef={cpassword}  
          />
         </Grid>           

        <Grid item my = {5}>
            <Box>

            <Grid item><Stack direction="row" spacing={4}>
              <Button variant="text" size="large" onClick={()=>navigate('/login')}>
                <GoogleIcon></GoogleIcon></Button>
              <Button type="submit" variant="contained" size="large">REGISTER</Button>
              </Stack>
              </Grid> 

            {/* <Button type="submit"
                id="form-submit"
                variant="contained" size="large">
                REGISTER
            </Button> */}
            {/* {match && <h4>Password and Conform password mismatch</h4>} */}
            </Box>

            </Grid> 
            {/* <Button variant="contained" id="loginNavigate" onClick={()=>{navigate('/login')}}>
              LOGIN
            </Button>   */}
        </form>
        
      </Grid>
      <Snackbar open={message} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </Box>
        </div>
    )     
}

export default Register;