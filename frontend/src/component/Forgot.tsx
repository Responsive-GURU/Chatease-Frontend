import React, { useRef } from 'react';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Grid, Stack } from '@mui/material';
import logo from "../image/logo.jpg"
import chat from "../image/chat.jpg";

function Forgot(){
    const email = useRef<HTMLInputElement>(null);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const Email=email.current?.value || '';
    }
    return(
        <>
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
        
       <form onSubmit={handleSubmit}>
            <Grid item my={4}><TextField required  inputRef={email} type="email" label="email"></TextField></Grid> 
           <Button variant="contained" color="primary">
                SEND
           </Button>
        </form> 

       </Grid>
      </Grid>
    </Grid>
      </>
    )
}


 
export default Forgot;