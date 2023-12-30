import { Card, CardHeader, Grid, Paper, Avatar, IconButton, ThemeProvider, createTheme, CardContent, TextField, Button, InputAdornment, TableRow, List, ListItem, ListItemIcon, ListItemText, Popover, CardActions, Typography } from "@mui/material";
import React, { useState } from "react";
import "./styles.css"
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddMessage from "./AddMessage";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 0,
      md: 400,
      lg: 500,
      xl: 800,
    },
  },
});

function PostCard(){
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const[openMessage, setOpenMessage]=useState<Boolean>(false);
  const handlePopoverOpen = (event:any) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleEdit = () => {
    // Handle edit action
    handlePopoverClose();
  };

  const handleDelete = () => {
    // Handle delete action
    handlePopoverClose();
  };

  return(
    <>
      {/* <Card>
        <CardHeader>
          
        </CardHeader>
      </Card> */}
      <ThemeProvider theme={theme}>
      <Grid container justifyContent={"center"}>
        <Grid item xs={12} lg={6}>
          <Card style={{
              border: '2px solid red', // Add border to the card
            }}>
            <CardHeader
              avatar={
                <Avatar aria-label="">
                  G
                </Avatar>
              }
              action={
                <IconButton aria-label="postUD" onClick={handlePopoverOpen}>
                  <MoreHorizIcon/>
                </IconButton>
                
              }

              title="GURUBHARAN N M"
              subheader="27-8-23" 
            />
             <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
            <List>
              <ListItem  onClick={handleEdit}>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Edit" />
              </ListItem>
              <ListItem button onClick={handleDelete}>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Delete" />
              </ListItem>
            </List>
          </Popover>
          <CardContent>          
            <Grid container direction="column" spacing={2}>
              <Grid item>
                {/* <TextField
                  variant="standard"
                  fullWidth
                  multiline
                  placeholder="What's on your mind???"
                  id="message"
                /> */}
                <Paper elevation={12} style={{ padding: '10px' }} variant="outlined" square >

                <Typography variant="body2" color="initial">
                  GURUBHARAN N M 
                </Typography>
                {
                  (!openMessage) && <Button
                  variant="text"
                  color="primary"
                  startIcon={<AddCircleIcon/>}
                  onClick={()=>{setOpenMessage(true)}}
                >
                  Reply
                </Button>
                }
                </Paper>
              </Grid>

              <Grid item>
                {openMessage && <AddMessage />}
              </Grid>
            </Grid>

            
          </CardContent>
          {/* <AddMessage/> */}

          <CardActions style={{ justifyContent: 'flex-end' }}>
            <Button disabled={true}
              variant="text"
              color="primary"
              endIcon={<SendIcon></SendIcon>}
            >  React </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
    </ThemeProvider>
      
    </>
  )
}

export default PostCard;