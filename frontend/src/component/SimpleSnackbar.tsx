import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

export default function SimpleSnackbar() {
  const [message, setMessage] = React.useState(false);

  const handleClick = () => {
    setMessage(true);
  };

  const handleClose = () => {
    setMessage(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button>
      
      <Snackbar open={message} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
      
      
    </div>
  );
}
