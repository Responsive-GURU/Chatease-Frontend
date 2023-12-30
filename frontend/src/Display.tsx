import { Grid, Card, CardContent, Typography, CardHeader, Avatar, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText, Popover, Button, TextField, CardMedia } from "@mui/material";
import React,{useState,useEffect} from "react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Edit, Delete } from "@mui/icons-material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatIcon from '@mui/icons-material/Chat';
import axios, { all } from "axios";
interface userpost{
  caption:string,
  date:string,
  image:string,
  id:string,
  userName:string
}
export const Display = () =>{

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [openCard, setOpenCard] = useState<Boolean>(false);
  const [replyMessage, setReplyMessage]=useState<String>('');
  const [enableReplyButton, setReplyButton] = useState<Boolean>(false);
  const[allPost,setAllPost]=useState<userpost[]>();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  const handleCardOpen = (uniqueId:string) =>{
    
    setOpenCard(!openCard);
  }
  const handlePostMessage = () =>{
    setOpenCard(!openCard)
  }
  const handleReplyMessage = (event:any)=>{
    setReplyMessage(event.target.value)
  }

  useEffect(() => {
    axios.get('http://localhost:8081/chatease/allpost')
        .then(response => {
            setAllPost(response.data.reverse());
            
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
}, [open]);
  return (  
    <>
    {
      allPost?.map(post => (

        <Grid container spacing={2} my={2} key = {post.id}>
        <Grid item xs={12} md={10} >
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="user-img">
                  G
                </Avatar>
              }
              action={
                <IconButton aria-label="" onClick={handleClick}>
                  <MoreHorizIcon/>
                </IconButton>
              }
              title={post.userName}
              subheader={post.date}
              
            />
            <Popover
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
              }}
              transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
              }}
            >
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Edit />
                  </ListItemIcon>
                  <ListItemText>Edit</ListItemText>
                </ListItem>
                  <Divider />
                <ListItem>
                  <ListItemIcon>
                    <Delete />
                  </ListItemIcon>
                  <ListItemText>Delete</ListItemText>
                </ListItem>
              </List>
            </Popover>

            <CardContent >
                <Typography>
                  {post.caption}
                </Typography>
                {
                  (!post.image) &&  <Button
                  variant="text"
                  startIcon={(!openCard)? <AddCircleIcon/>:<CloseIcon/>}
                  onClick={()=>handleCardOpen(post.id)}
                >
                  {(!openCard) ? "Reply":"Close"}
                </Button>
                }
               
            </CardContent>
            {post.image != null &&
                <img
                // component="img"
                height="220"
                width={'100%'}
                src={require(`./media/${post.image}`)}
                alt="abc"
                />
                }
            <Grid item>
              {
                (openCard && !(post.image)) &&
                <Card>
                <CardContent>
                  <div style={{display:'flex', alignItems:'center', gap:'2'}}>
                  <Avatar>
                    G
                  </Avatar>
                  <TextField 
                  // style={{border:'4px solid gray', borderRadius:"50px"}}
                    fullWidth
                    multiline
                    id=""
                    label=""
                    variant="filled"
                    value={replyMessage}   
                    onChange={handleReplyMessage} 
                  />
                  </div>
                  <Button
                    variant="text"
                    endIcon={<SendIcon/>}

                    onClick={handlePostMessage}
                  >
                    Post
                  </Button>
                  </CardContent>
              </Card>
              }
              <CardContent>
              <Button
                variant="text"
                color="primary"
                startIcon={ <ThumbUpIcon/>}
              > LIKE
              </Button>
              <Button
                variant="text"
                color="primary"
                startIcon={ <ChatIcon/>}
              > COMMENT
              </Button>
        </CardContent>
        </Grid>
        
      </Card>
    </Grid>
        
       
        {/* {openCard &&
        <Grid item xs={12} sm={6} display={'flex'}>

        </Grid> }
         */}
      </Grid>
      ))
    }
      
    </>
  )
}

