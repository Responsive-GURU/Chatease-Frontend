import { Grid,Stack,Box,ListItem, Typography, CardHeader, Avatar, Icon, CardMedia, CardContent, Menu} from "@mui/material";
import React, { useState,useRef} from 'react';
import Card from '@mui/material/Card';
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import image from './luffy.jpg';
import IconButton from "@mui/material/IconButton";
import { ThumbDown } from "@mui/icons-material";
import { ThumbUp } from "@mui/icons-material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {MenuItem} from "@mui/material";
import { MouseEvent } from 'react';
import { ThemeProvider} from "@mui/material"
import {createTheme} from "@mui/material";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
const PostCards=()=>{
    const [count,Setcount]=useState(0)
    const [count1,Setcount1]=useState(0)
    const [count2,setCount2]=useState(false)
    const change=()=>{
      Setcount(count+1)
    }
    const change1=()=>{
       Setcount1(count1+1)
    }
    const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event:MouseEvent<HTMLButtonElement>) => {
    const target: HTMLButtonElement = event.currentTarget;
  };
  const text1=()=>{
     setCount2(!count2)
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
    return(
       <Card sx={{maxWidth:370, maxHeight:500, mx:'auto',my:5}}>
          <CardHeader
             avatar={
              <Avatar>
                C
              </Avatar>
             }
          action={
            <div>
            <IconButton>
              <MoreVertIcon> </MoreVertIcon>
            </IconButton>
             <Menu
             anchorEl={anchorEl}
             open={Boolean(anchorEl)}
             onClose={handleClose}
           >
             <MenuItem onClick={handleClose}>Option 1</MenuItem>
             <MenuItem onClick={handleClose}>Option 2</MenuItem>
             <MenuItem onClick={handleClose}>Option 3</MenuItem>
           </Menu>
           </div>}
            title="chat-ease"
            subheader="time"
          />
          <CardMedia
           component="img"
           height="220"
           image={image}
           alt="abc"/>
           <CardContent>
              <TextField variant="outlined"  label="comments" multiline fullWidth/>
              <Stack direction="row" my={1} spacing={9}><Button variant="text" size="small" onClick={change}> <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon> {count}</Button><Button variant="text" size="small" onClick={text1}> {count2 && <TextField variant="outlined" fullWidth/>}<CommentOutlinedIcon></CommentOutlinedIcon></Button> <Button variant="text" size="small"><ShareOutlinedIcon></ShareOutlinedIcon></Button></Stack>
           </CardContent>
        </Card>
    )
}
export default PostCards;