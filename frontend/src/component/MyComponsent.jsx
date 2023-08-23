import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function MyComponent() {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleShowSnackbar = () => {
    setOpen(true);
  };

  return (
    <div>
      <button onClick={handleShowSnackbar}>Show Toast</button>
      <Snackbar
        open={open}
        autoHideDuration={10000} // Duration in milliseconds (10 seconds)
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        action={
          <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      >
        <Alert onClose={handleClose} severity="success">
          This is a toast message.
        </Alert>
      </Snackbar>
    </div>
  );
}

export default MyComponent;
