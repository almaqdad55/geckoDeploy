import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Fade from '@mui/material/Fade';

export default function ErrorAlert({ message }) {
  const [open, setOpen] = useState(true);
  const [alertVisibility, setAlertVisibility] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  setTimeout(handleClose, 3000);

  return (
    <div>
      <Fade
        in={open}
        timeout={{ enter: 1000, exit: 1000 }}
        addEndListener={() => {
          setTimeout(() => {
            setOpen(false);
          }, 10000);
        }}
      >
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error" onClose={handleClose}>
            {message}
          </Alert>
        </Stack>
      </Fade>
    </div>
  );
}
