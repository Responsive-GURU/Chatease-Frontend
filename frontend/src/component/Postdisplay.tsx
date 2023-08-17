import {Grid,DialogActions,Card,CardHeader,Stack,Menu,MenuItem,CardContent,CardMedia,Avatar} from "@mui/material";
import { useState,useEffect} from "react";
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
import { useParams } from "react-router-dom";
import Userpost from './Userpost'
import axios from "axios";
interface userpost{
  caption:string,
  date:string,
  image:string,
  id:string,
  userName:string
}
const Homepage=()=>{
    const[image,setImage]=useState<File|null>(null);
    
    const [value,setValue]=useState<null|HTMLElement>(null);
    const [count,Setcount]=useState(0)
    const [open, setOpen] =useState(false);
    const [count2,setCount2]=useState(false)
    const[allPost,setAllPost]=useState<userpost[]>();
    const [value1,setValue1]=useState<null|HTMLElement>(null);
    const { email} = useParams<{ email: string}>();
    const open1=Boolean(value1);
    
    useEffect(() => {
      axios.get('http://localhost:8080/chatease/allpost')
          .then(response => {
              setAllPost(response.data);
          })
          .catch(error => {
              console.error('Error fetching posts:', error);
          });
  }, [open]);
    const change=()=>{
      Setcount(count+1)
    }

    const text1=()=>{
      setCount2(!count2)
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setValue(event.currentTarget);
    };
    
    return(
        <Grid>
          {allPost?.map(post=>(
            <div key={post.id}>
            <Grid container display="flex" justifyContent="center">
            <Card sx={{maxWidth:370, maxHeight:500, mx:'auto',my:5}}>
            <CardHeader      
              avatar={
                <Avatar>
                 {post.userName}
                  
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
              title={post.userName}
              subheader={post.date}
            />
            <CardMedia
                    component="img"
                    height="220"
                    src={require(`../media/${post.image}`)}
                    alt="abc"
                    />
  
            <CardContent>
                
                <Stack direction="row"><span>{post.caption}</span></Stack>
                <Stack direction="row" my={4} spacing={9}><Button variant="text" size="small" onClick={change}> <ThumbUpOutlinedIcon></ThumbUpOutlinedIcon> {count}</Button><Button variant="text" size="small" onClick={text1}> {count2 && <TextField variant="outlined" fullWidth/>}<CommentOutlinedIcon></CommentOutlinedIcon></Button> <Button variant="text" size="small"><ShareOutlinedIcon></ShareOutlinedIcon></Button></Stack>
            </CardContent>
          </Card>
          </Grid>
          </div>
          ))}
        </Grid>
    )
}
export default Homepage;