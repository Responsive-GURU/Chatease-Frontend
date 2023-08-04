import React, { useState } from "react";
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import axios from "axios";
// import { Details } from "@mui/icons-material";
import { Box, Grid } from '@mui/material'

// const axios = require('axios')

interface details{
    name:string;
    email:string;
    password:string;
    cpassword:string;
}
function Register(){
    const[user, setUser]= useState<details>({
        name:"",
        email:"",
        password:"",
        cpassword:""
    })
    const [match, setMatch]=useState<boolean>(false);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{      
        e.preventDefault();
        // alert("hi")
        // console.log(typeof user)
        if(user.password===user.cpassword){
            // alert("Email "+user.email+ "Password"+user.password)
            axios.post('http://localhost:8080/signup',user).then((response)=>{
                console.log("Sent success",response)
            }).catch((error)=>{
                console.log(error)
            })
        }   
        else{
            setMatch(true);
        }
        
    }

    console.log('Signup rendered');

    return(
        <div className="form1">
            <Grid container my={2} justifyContent="center">
            <form onSubmit={handleSubmit}>
            
            <h1>WELCOME</h1>
          
            <TextField required
            id="outlined-required"
            label="NAME"
            name="name"
            value={user.name}
            onChange={(e)=>setUser({...user, name:e.target.value})}
            />

        <Grid item my = {3}>
            <Box>
                <TextField required
                id="outlined-required"
                label="EMAIL"
                type="email"
                name="email"
                value={user.email}
                onChange={(e)=>{setUser({...user,email:e.target.value})}}
                />
            </Box>
        </Grid>
            

            <TextField required 
              type="password"
              name="password"
              id="outlined-password-input"
              label="Password"
              value={user.password}
              onChange={(e)=>{setUser({...user, password:e.target.value})}}
            />

            <Grid item my = {3}>
            <Box>
            <TextField required
              type="password"
              name="cpassword"
              id="outlined-required"
              label="Conform Password"
              value={user.cpassword}
              onChange={(e)=>{setUser({...user,cpassword:e.target.value})}}    
            />
            </Box>
            </Grid>           

            <Grid item my = {3}>
            <Box>
            <Button type="submit"
                            variant="contained" size="large">
                        SUBMIT
                        </Button>

                        {match && <h4>Password and Conform password mismatch</h4>}
            </Box>
            </Grid>    
        </form>
            </Grid>
            
        </div>
        
    )
}

export default Register;