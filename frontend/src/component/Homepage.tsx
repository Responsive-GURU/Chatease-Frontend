import {Grid,DialogActions,Card,CardHeader,Stack,Menu,MenuItem,CardContent,CardMedia,Avatar} from "@mui/material";
import { useState,useRef,useEffect} from "react";
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import IconButton from "@mui/material/IconButton";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import logo from '../image/logo.jpg'
import HomeIcon from '@mui/icons-material/Home';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Person2Icon from '@mui/icons-material/Person2';

import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Homepage=()=>{
  
    const[image,setImage]=useState<File|null>(null);
    const [check,setCheck]=useState(true);
    const [display,setDisplay]=useState(false);
    const [value,setValue]=useState<null|HTMLElement>(null);
    const [count,Setcount]=useState(0)
    const [open, setOpen] =useState(false);
    const [count2,setCount2]=useState(false)
    const [textval,setTextval]=useState<String|null>(null);
    const [value1,setValue1]=useState<null|HTMLElement>(null);
    const open1=Boolean(value1);
    const ImageUpload=(event:React.ChangeEvent<HTMLInputElement>)=>{
     setImage(event.target.files?.[0]||null) //? will not throw an error instead it returns undefined
     setCheck(false);
    
    }
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
            setCurrentTime(new Date());
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();
    const handleClose1 = () => {
      setOpen(false);
      setDisplay(true);
    };
   
    const handleOpen = () => {
      setOpen(true);
    };

    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    
    const change=()=>{
      Setcount(count+1)
    }

    const text1=()=>{
      setCount2(!count2)
    }
    const textchange=(event:React.ChangeEvent<HTMLInputElement>)=>{
       setTextval(event.target.value);
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setValue(event.currentTarget);
    };
    return(
        <Grid>
          <Grid container justifyContent="space-between" sx={{borderBottom:'2px solid blue',backgroundColor:"lightBlue", padding:'15px 5px',position:'sticky',top:'0px'}}>
            {/* 15px->top and bottom  5px ->right and left */}
            <Grid item display="flex" justifyContent="center" alignItems="center">
              <img src={logo} alt="asa" width="20%"></img>
              <span style={{color:"black",marginLeft:"30px"}}>CHATEASE</span>
            </Grid>     
            <Grid item display="flex" justifyContent="center" alignItems="center">
              <Button variant="outlined" size="small" style={{color:"black"}} ><HomeIcon></HomeIcon></Button>
              <Button variant="outlined" size="small" style={{color:"black",marginLeft:"30px"}}><Person2Icon></Person2Icon></Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" sx={{marginTop:'30px'}}>
            <Grid container justifyContent="center" sx={{border:'1px solid black', borderRadius:'10px',width:'300px',height:'90px'}}>
              <Grid item display="flex" justifyContent="center" alignItems="center">
                <Person2Icon></Person2Icon>
                <Button variant="outlined" onClick={handleClickOpen} style={{marginLeft:'10px'}}>
                 Start Post
                </Button>
                <Dialog
                  onClose={handleClose}
                  open={open}
                >
                <DialogTitle>
                  <Grid container justifyContent="space-between">
                     <span style={{color:"blue"}}>Create Post</span>
                     <Button variant="text" onClick={handleClose}>X</Button>
                  </Grid>
                </DialogTitle>
                <DialogContent dividers>
                  <Grid container flexDirection="column">
                    <Grid item display='flex' justifyContent="center" alignItems="center">{image&& <img src={URL.createObjectURL(image)}  height="200%" width="45%" alt="hai"></img>}</Grid>
                    <Grid item my={2} display='flex' justifyContent="center" alignItems="center" style={{position:"relative"}}>
                    {check && <Button variant="contained">+</Button>}
                    <input
                    type="file"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      opacity:0,
                      width: "80%",
                      height: "90%",
                    
                    }}
                    accept="image/jpeg"
                    onChange={ImageUpload}
                    />
                    </Grid>
                  </Grid>
                <Grid item display="flex" justifyContent="center" alignItems="center">
                  <TextField variant="standard" placeholder="comment" style={{marginLeft:'20px'}} multiline onChange={textchange}></TextField>
                </Grid>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose1}>
                  Post
                </Button>
              </DialogActions>
              </Dialog>
              </Grid>
           </Grid>
          </Grid>
          <Grid container display="flex" justifyContent="center">
            {display &&<Card sx={{maxWidth:370, maxHeight:500, mx:'auto',my:5}}>
            <CardHeader      
              avatar={
                <Avatar>
                  C
                </Avatar>
              }
            action={
              <Grid>
              <IconButton onClick={handleClick}>
                <MoreVertIcon> </MoreVertIcon>
              </IconButton>
              <Menu
                id="item"
                open={open1}
                anchorEl={value1}//it is used to position the menu relative to the specific element
                onClose={()=>setValue(null)}>
              {/* <MenuItem>AddImage <input type="file" accept="image/png"/></MenuItem> */}
                <MenuItem>EditPost</MenuItem>
                <MenuItem>DeletePost</MenuItem>
              </Menu>
            </Grid>}

              title="chat-ease" 
              subheader={formattedTime}
            />
            {image &&<CardMedia
                    component="img"
                    height="220"
                    image={URL.createObjectURL(image)}
                    alt="abc"
                    />
                    }
            <CardContent>
                <Stack direction="row"><span>{textval}</span></Stack>
                <Stack direction="row" my={4} spacing={9}><Button variant="text" size="small" onClick={change}> <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon> {count}</Button><Button variant="text" size="small" onClick={text1}> {count2 && <TextField variant="outlined" fullWidth/>}<CommentOutlinedIcon></CommentOutlinedIcon></Button> <Button variant="text" size="small"><ShareOutlinedIcon></ShareOutlinedIcon></Button></Stack>
            </CardContent>
          </Card>}
        
          </Grid>
       </Grid>
    )
}
export default Homepage;