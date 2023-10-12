import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  Grid,
  Link,
  Button,
  InputAdornment,
  TextField,
  FormControl,
  InputLabel,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  MenuItem,
  Select,
  FormHelperText,
  Switch,
} from '@mui/material';
import DatePaickerForm from '../DatePaicker';

const FormUserDetails = ({
  nextStep,
  handleFieldChnage,
  values,
  show,
  setShow,
}) => {
  const continueTo = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backTo = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Container component="main" maxwidth="md" sx={{ padding: 8 }}>
        <CssBaseline />
        <h1>Personal Details</h1>
        <Box
          sx={{
            padding: 8,
            display: 'flex',
            // flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ededed',
          }}
        >
          <Box
            component="form"
            //onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <Container>
              <Grid container spacing={2} rowSpacing={4}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoFocus
                    onChange={handleFieldChnage('firstName')}
                    defaultValue={values.firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoFocus
                    onChange={handleFieldChnage('lastName')}
                    defaultValue={values.lastName}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Box
                    sx={{
                      display: 'flex',
                    }}
                  >
                    <Typography variant="subtitle1" gutterBottom width="500px">
                      Are you known by any other naems? (E.g. previos name, your
                      maiden name)
                    </Typography>
                    <Switch
                      checked={show}
                      onChange={() => setShow((prev) => !prev)}
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  </Box>
                </Grid>
                {show && (
                  <Grid item xs={12} sm={12}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        label="Other Names"
                        name="otherNames"
                        autoFocus
                        onChange={handleFieldChnage('otherNames')}
                        defaultValue={values.otherNames}
                      />
                    </Grid>
                  </Grid>
                )}

                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoFocus
                    onChange={handleFieldChnage('email')}
                    defaultValue={values.email}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="mobile"
                    label="Mobile"
                    name="mobile"
                    autoFocus
                    inputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+61</InputAdornment>
                      ),
                      type: 'number',
                    }}
                    onChange={handleFieldChnage('mobile')}
                    defaultValue={values.mobile}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="gender"
                    label="Gender"
                    name="gender"
                    autoFocus
                    defaultValue={values.gender}
                    onChange={handleFieldChnage('gender')}
                  />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="gender">Gender</InputLabel>
                    <Select
                      labelId="gender"
                      id="select-gender"
                      label="Gender"
                      defaultValue={values.gender}
                      onChange={handleFieldChnage('gender')}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={'male'}>Male</MenuItem>
                      <MenuItem value={'female'}>Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid> */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth sx={{ mt: 1 }}>
                    <DatePaickerForm label="DOB" />
                  </FormControl>
                </Grid>
              </Grid>
            </Container>

            <Box
              textAlign="center"
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                justifyItems: 'center',
                gap: 10,
                mt: 10,
              }}
            >
              <Button
                variant="contained"
                onClick={continueTo}
                sx={{
                  mt: 3,
                  mb: 2,
                  minWidth: '200px',
                  backgroundColor: '#176C3F',
                  p: 2,
                }}
              >
                Continue
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default FormUserDetails;

// <div>

// <br />

// <br />

// <br />
// <Button
//   fullWidth
//   variant="contained"
//   sx={{
//     mt: 3,
//     mb: 2,
//     width: '50%',
//     backgroundColor: '#176C3F',
//   }}
//   onClick={continueTo}
// >
//   Continue
// </Button>
// </div>
