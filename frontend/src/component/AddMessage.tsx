import React, { useState } from "react";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextField from '@mui/material/TextField'
import Paper from "@mui/material/Paper";
import { Avatar, Grid, Button, CardHeader, IconButton, Card } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
function AddMessage(){
    const[newMessage, setNewMessage] = useState<Boolean>(false)
    return(
        <>
           
            {/* <Grid container > */}
            <Paper elevation={12} style={{ padding: '10px' }} variant="outlined" square >
            <div style={{ position: 'relative'}}>
                <IconButton style={{ position: 'absolute', top: '1px', right: '5px' }} color="error">
                <CloseIcon/>
                </IconButton>       
            </div>
                    <Grid item display={"flex"} >
                    <Avatar>G</Avatar>
                    <TextField
                        fullWidth
                        multiline
                        variant="standard"
                        id=""
                        label=""              
                        />
                    </Grid>
                    <Button
                      variant="text"
                      color="primary"
                      startIcon={<AddCircleIcon/>}  
                      onClick={()=>{setNewMessage(newMessage)}}
                    >
                      Reply
                    </Button>
            
                      
                </Paper>

                {/* </Grid> */}
            <Card>
                <CardHeader
                avatar={
                    <Avatar aria-label="">
                        6
                    </Avatar>
                }
                action={
                    <IconButton aria-label="" color="error">
                        <CloseIcon/>
                    </IconButton>
                }
                title=""
                subheader=""
                
                />
            </Card>
            
            
        </>
    )
}   


export default AddMessage;