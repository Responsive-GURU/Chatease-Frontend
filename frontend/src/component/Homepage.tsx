import {Grid,Card,CardHeader,Stack,Menu,MenuItem,CardContent,CardMedia,Avatar} from "@mui/material";
import { useState,useEffect} from "react";
import { TextField } from '@mui/material';
import {Button} from '@mui/material';
import IconButton from "@mui/material/IconButton";
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
import Postdisplay from './Postdisplay'
interface userpost{
  caption:string,
  date:string,
  image:File,

  id:string
}
const Homepage=()=>{
  

    const[image,setImage]=useState<File|null>(null);
    const [check,setCheck]=useState(true);
    const [display,setDisplay]=useState(false);
    const [value,setValue]=useState<null|HTMLElement>(null);
    const [count,Setcount]=useState(0)
    const [open, setOpen] =useState(false);
    const [count2,setCount2]=useState(false)
    const [textval,setTextval]=useState<string>('');  
    const[allPost,setAllPost]=useState<userpost[]>();
    const [value1,setValue1]=useState<null|HTMLElement>(null);
    const { email} = useParams<{ email: string}>();
  
    const open1=Boolean(value1);
    const ImageUpload=(e:React.ChangeEvent<HTMLInputElement>)=>{
      if (e.target.files && e.target.files[0]) {
        setImage(e.target.files[0]);
    }//? will not throw an error instead it returns undefined
     setCheck(false);
    
    }
    const [currentTime, setCurrentTime] = useState(new Date());
    
    useEffect(() => {
      axios.get('http://localhost:8080/chatease/allpost')
          .then(response => {
              setAllPost(response.data);
          })
          .catch(error => {
              console.error('Error fetching posts:', error);
          });
  }, [open]);
    useEffect(() => {
            setCurrentTime(new Date());
    }, []);

    const formattedTime = currentTime.toLocaleTimeString();
  //   const handleClose1 = () => {
  //     setOpen(false);
  //     setDisplay(true);
  //     axios.post("http://localhost:8080/chatease/userpost",{image:image && URL.createObjectURL(image),date:currentTime,caption:textval,email:email}).then((response)=>{
  //       console.log(response);
  
  // }).catch((e)=>{
  //    console.log(e)
  // })
  //   };
   
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
    const handleSubmit = async (e: React.FormEvent) => {
      e.stopPropagation();
      setOpen(false);
      setDisplay(true);
      const formData = new FormData();
      formData.append('caption',textval);
      formData.append('image', image || ''); // Handle if image is null blob stores b
      formData.append('date',  currentTime.toISOString());
      formData.append('email',email || '')
      try {
              await axios.post('http://localhost:8080/adding', formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
          });
          // Clear form fields or update the post list
      } catch (error) {
          console.error('Error adding post:', error);
      }
  };
    return(
        <Grid>
          <Grid container justifyContent="space-between" sx={{borderBottom:'2px solid blue',backgroundColor:"lightBlue", padding:'15px 5px',position:'sticky',top:'0px',zIndex:'1'}}>
         
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
           <Grid item><Userpost/><Postdisplay/></Grid> 
          
          </Grid>
        </Grid>
    )
}

export default Homepage;