import { TextField} from '@mui/material';
import {Button} from '@mui/material';
import {Grid,Stack} from '@mui/material'
import React, {useRef} from 'react';
import { useNavigate,Routes,Route} from 'react-router-dom';
import {Register} from './Register'
import Homepage from './Homepage';
import logo from '../image/logo.jpg'
import Link from '@mui/material/Link';
import chat from '../image/chat.jpg'

 const Signin=()=>{
    const value2=useRef<HTMLInputElement>(null)
    const value3=useRef<HTMLInputElement>(null)
    const navigate = useNavigate();
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
        </Grid>
        <Grid container> 
          <Grid item sx={{height:520,width:650,backgroundImage:`url(${chat})`}}></Grid>
          <Grid container sx={{width:400,height:490,my:2,mx:'auto'}}>
            <Grid container my={3} justifyContent="center"><img src={logo} alt="asa" width="10%" height="40%"></img><span style={{color:"blue",fontSize:"22px"}}>LOGIN</span></Grid>
            <Grid container my={1} justifyContent="center">
              <form onSubmit={type1}>
                  <Grid item my={2}><TextField required  inputRef={value2} type="email" label="email"></TextField></Grid> 
                  <Grid item my={5}><TextField required  inputRef={value3} type="password" label="password"></TextField></Grid>
                  <Grid item my={4} mx={1}>
                      <Stack spacing={2} direction="row">
                        <Link href="">Forgot password</Link>
                        <Button type="submit" variant="contained" size="small">LOGIN</Button>
                      </Stack>
                  </Grid>
              </form>
            </Grid>
          </Grid> 
        </Grid>
        <Routes>
        <Route path="/chatease/register" element={<Register/>} />  
        <Route path="/chatease/homepage" element={<Homepage/>} /> 
        </Routes>
    </Grid>
  )

}
export default Signin

// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';



// // TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const data = new FormData(event.currentTarget);
//     const password = data.get('password');
//     const cpassword = data.get('cpassword');
//     if(password === cpassword){
//         console.log("REGISTRATION SUCCESSFULL")
//     }
//     else{
//         console.log("PASSWORD AND CONFORM PASSWORD MISMATCH");
//     }
//     // console.log({
//     //   email: data.get('email'),
//     //   password: data.get('password'),
//     //   cpassword: data.get('cpassword')
//     // });
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//             <LockOutlinedIcon />

//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign up
//           </Typography>
//           <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="firstName"
//                   required
//                   fullWidth
//                   id="firstName"
//                   label="First Name"
//                   autoFocus
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="lastName"
//                   label="Last Name"
//                   name="lastName"
//                   autoComplete="family-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   id="email"
//                   type='email'
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="password"
//                   label="Password"
//                   type="password"
//                   id="password"
//                   autoComplete="new-password"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   fullWidth
//                   name="cpassword"
//                   label="Conform Password"
//                   type="password"
//                   id="cpassword"
//                   autoComplete="new-password"
//                 />
//               </Grid>
             
//             </Grid>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign Up
//             </Button>
//             <Grid container justifyContent="flex-end">
//               <Grid item>
//                 <Link href="#" >
//                   Already have an account? Sign in
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
       
//       </Container>
//     </ThemeProvider>
//   );
// }