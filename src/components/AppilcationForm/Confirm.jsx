import React from 'react';
import { ListItem, List, ListItemText, Button } from '@mui/material';

const Confirm = ({ prevStep, nextStep, values }) => {
  const continueTo = (e) => {
    e.preventDefault();
    nextStep();
  };
  const backTo = (e) => {
    e.preventDefault();
    prevStep();
  };
  const { firstName, lastName, email, occupation, city, bio } = values;

  return (
    <div>
      <h1>Confirm</h1>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemText primary="First Name" secondary={firstName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Last Name" secondary={lastName} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Email" secondary={email} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Occupation" secondary={occupation} />
        </ListItem>
        <ListItem>
          <ListItemText primary="City" secondary={city} />
        </ListItem>
        <ListItem>
          <ListItemText primary="Bio" secondary={bio} />
        </ListItem>
      </List>
      <br />
      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          width: '50%',
          backgroundColor: '#176C3F',
        }}
        onClick={backTo}
      >
        Back
      </Button>
      <br />
      <Button
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          width: '50%',
          backgroundColor: '#176C3F',
        }}
        onClick={continueTo}
      >
        Continue
      </Button>
    </div>
  );
};

export default Confirm;
