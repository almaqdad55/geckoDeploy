import React, { useState } from 'react';
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
  OutlinedInput,
} from '@mui/material';
import UploadFile from './UploadFile';
import FileUploader from './FileUploader';

const FormIncome = ({ prevStep, nextStep, handleFieldChnage, values }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const continueTo = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backTo = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Container component="main" maxwidth="" sx={{ padding: 8 }}>
        <CssBaseline />
        <h1>Income</h1>
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
            <Container fullWidth>
              <Grid container spacing={2} sx={{ width: '1000px' }}>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Income
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Amount"
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel id="demo-simple-select-label">
                      Weekly, fortnightly, monthly or annually?
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="  Weekly, fortnightly, monthly or annually?"
                      defaultValue={values.gender}
                      onChange={handleFieldChnage('gender')}
                    >
                      <MenuItem value={'weekly'}>Weekly</MenuItem>
                      <MenuItem value={'fortnightly'}>Fortnightly</MenuItem>
                      <MenuItem value={'monthly'}>Monthly</MenuItem>
                      <MenuItem value={'annually'}>Annually</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <UploadFile title="Income Statement" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <UploadFile title="Pay Slip" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <UploadFile title="Other Documents" />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                  <FileUploader
                    onFileSelect={(file) => setSelectedFile(file)}
                  />
                </Grid> */}
              </Grid>
            </Container>

            <Box
              textAlign="center"
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                justifyItems: 'center',
                gap: 10,
                mt: 10,
                pl: 3,
                pr: 3,
              }}
            >
              <Button
                variant="contained"
                onClick={backTo}
                sx={{
                  mt: 3,
                  mb: 2,
                  minWidth: '200px',
                  backgroundColor: '#176C3F',
                  p: 2,
                }}
              >
                Prev
              </Button>
              <Button
                variant="contained"
                onClick={continueTo}
                sx={{
                  mt: 3,
                  mb: 2,
                  minWidth: '200px',
                  backgroundColor: '#176C3F',
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

export default FormIncome;
