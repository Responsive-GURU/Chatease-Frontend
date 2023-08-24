import React,{useEffect} from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useParams } from 'react-router-dom';




export default function Profile() {
    const { email} = useParams<{ email: string}>();
    const profileImage ={
        width: 100,
        height: 100,
        borderRadius: '50%',
        margin: 'auto'
    }

    const userDetails = {
        margin:"auto"
    }
    useEffect(() => {
      axios.post("localhost:8080/chatease/profile/",{email}).then((response)=>{
        console.log(response)
      }).catch((error)=>{
        console.log(error)
      })
    }, [email])
    
  return (
    <Card sx={{ maxWidth: 400, maxHeight:345 }}>
      <CardMedia style={profileImage}
        component="img"
        src={require(`../image/chatease.png`)}
        alt="Paella dish"
      />
      <CardContent>
        <div style={userDetails}>
            <Typography variant="body1" color="initial">
                GURUBHARNA N M
            </Typography>
            <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
            </Typography>
        </div>
        
      </CardContent>
      
    </Card>


  );
}