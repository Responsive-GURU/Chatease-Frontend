import {Grid,Snackbar,Stack} from '@mui/material'
import React, {useRef, useState} from 'react';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import axios from 'axios';
import { useNavigate,Routes,Route} from 'react-router-dom';
import logo from "../image/logo.jpg"
import GoogleIcon from '@mui/icons-material/Google';
import Link from '@mui/material/Link';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={10} ref={ref} variant="filled" {...props} />;
});



export const Register=()=>{
    const [message, setMessage] = useState(false);
    const [alertSeverity, setAlertSeverity] = useState<'success' | 'error' | 'info' | 'warning'>('success');
    const [responseMessage, setResponseMessage] = useState<String>();
    const handleClose = () => {
      setMessage(false);
    };

     const namevalue=useRef<HTMLInputElement>(null)
     const emailvalue=useRef<HTMLInputElement>(null)
     const password=useRef<HTMLInputElement>(null)
     const cpassword=useRef<HTMLInputElement>(null)
     const navigate = useNavigate();   
    
   const type1=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const name =namevalue.current?.value || '';
    const email=emailvalue.current?.value || '';
    const pass=password.current?.value || '';
    const cpass=cpassword.current?.value || '';
    const regex=new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$!@%^&*()]).{8,}')
    
    if(regex.test(pass)){
      if(pass===cpass){
        axios.post("http://localhost:8080/chatease/register",{userName:name,email:email,password:pass})
        .then((response)=>{
            // alert("logged in successfully");
            if(response.status === 200){
              setMessage(true)
              setAlertSeverity("success")
              setResponseMessage(response.data.message)
              setTimeout(()=>{
              navigate('/chatease/login');
            },2000)  
            }     

          }).catch((error)=>{
            console.log(error)
            setMessage(true)
            setAlertSeverity("error")
            setResponseMessage(error.message)
          })        
        }
      else{
        alert("incorrect password")
      }
    }
    else{
      alert(`password must contain atleast 8 characters ${pass} ${cpass}`)
    }
  }
  const change=()=>{
     navigate('/chatease/login')
  }

    return (
   
      <>
       <Grid container my={1} justifyContent="center"><img src={logo} alt="asa" width="10%" height="90%"></img><span style={{color:"blue",fontSize:"22px"}}>REGISTER</span></Grid>
       <Grid container  justifyContent="center">
          <form onSubmit={type1}>
            <Grid item my={1}><TextField required inputRef={namevalue} type="text" label="name"></TextField></Grid>
            <Grid item my={4}><TextField required  inputRef={emailvalue} type="email" label="email"></TextField></Grid> 
            <Grid item my={4}><TextField required  inputRef={password} type="password" label="password"></TextField></Grid>
            <Grid item my={3}><TextField required  inputRef={cpassword} type="password" label="confirm password"></TextField></Grid>
            <Grid item><Stack direction="row" spacing={4}><Button variant="text" size="small"><GoogleIcon></GoogleIcon></Button><Button type="submit" variant="contained" size="medium">submit</Button></Stack></Grid>
            <Grid item my={2}>Already have an account?<Link  href="" onClick={change}>Login</Link></Grid>
          </form>
       </Grid>
       <Snackbar open={message} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={alertSeverity} sx={{ width: '100%' }}>
          {responseMessage}
        </Alert>
      </Snackbar>
     </>
)}

