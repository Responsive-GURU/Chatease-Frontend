import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';

const HoverIcons: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <IconButton
        aria-label="Like"
        aria-controls="like-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ThumbUpIcon />
      </IconButton>
      <Popover
        id="like-menu"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div style={{ padding: '16px' }}>
          <IconButton aria-label="Heart">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Like">
            <ThumbUpIcon />
          </IconButton>
          <IconButton aria-label="Sad">
            <SentimentVeryDissatisfiedIcon />
          </IconButton>
          <IconButton aria-label="Happy">
            <SentimentSatisfiedIcon />
          </IconButton>
        </div>
      </Popover>
    </div>
  );
};

export default HoverIcons;
