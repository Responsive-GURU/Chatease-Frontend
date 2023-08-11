import {Grid,Stack} from '@mui/material'
import React, {useRef} from 'react';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import Signin from './Signin';
import axios from 'axios';
import { useNavigate,Routes,Route} from 'react-router-dom';
import logo from "../image/logo.jpg"
import GoogleIcon from '@mui/icons-material/Google';
import Link from '@mui/material/Link';
/*interface record{
    name:string,
    email:string,
    pass:string,
    cpass:string
  }*/
export const Register=()=>{
    //const [use1,setUse1]=useState<record>({name:"",email:"",pass:"",cpass:""})
     const value1=useRef<HTMLInputElement>(null)
     const value2=useRef<HTMLInputElement>(null)
     const value3=useRef<HTMLInputElement>(null)
     const value4=useRef<HTMLInputElement>(null)
     const navigate = useNavigate();
   
    /*const fetchData = async (name:string) => {
      try {
        const response = await axios.get("http://localhost:8080/signin");
        if(response.data){
          navigate(`/Signin`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };*/

    //anonymous function passing setUse1 so it is a callback function
    const type1=(e:React.FormEvent<HTMLFormElement>)=>{//React.FormEvent is the type
    e.preventDefault();//cancels the event if it is cancellab lehis is done using the preventDefault() method of an event. The preventDefault() method of an event is used to stop a cancelable event from executing.
    const name =value1.current?.value || '';
    const email=value2.current?.value || '';
    const pass=value3.current?.value || '';
    const cpass=value4.current?.value || '';
    const regex=new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$!@%^&*()]).{8,}')//?= positive lookahead doesnot need order
    
    if(regex.test(pass)){
      if(pass===cpass){
        alert("ok")
        navigate(`/chatease/login`);
        //fetchData(name)
    }
      else{
        alert("incorrect password")
      }
    }
    else{
      alert(`password must contain atleast 8 characters ${pass} ${cpass}`)
    }
   // if(use1.pass===use1.cpass){
      //alert("successful login");

 axios.post("http://localhost:8080/signin",{name:name,email:email,password:pass}).then((response)=>{//then is a chaining
     console.log(response)
  }).catch((e)=>{
     console.log(e)
  }
  )
  }
  const change=()=>{
     navigate('/chatease/login')
  }

    return (
   
      <>
       <Grid container my={1} justifyContent="center"><img src={logo} alt="asa" width="10%" height="90%"></img><span style={{color:"blue",fontSize:"22px"}}>REGISTER</span></Grid>
       <Grid container  justifyContent="center">
          <form onSubmit={type1}>
            <Grid item my={1}><TextField required inputRef={value1} type="text" label="name"></TextField></Grid>
            <Grid item my={4}><TextField required  inputRef={value2} type="email" label="email"></TextField></Grid> 
            <Grid item my={4}><TextField required  inputRef={value3} type="password" label="password"></TextField></Grid>
            <Grid item my={3}><TextField required  inputRef={value4} type="password" label="confirm password"></TextField></Grid>
            <Grid item><Stack direction="row" spacing={4}><Button variant="text" size="small"><GoogleIcon></GoogleIcon></Button><Button type="submit" variant="contained" size="medium">submit</Button></Stack></Grid>
            <Grid item my={2}>Already have an account?<Link  href="" onClick={change}>Login</Link></Grid>
          </form>
       </Grid>
  </>
)}