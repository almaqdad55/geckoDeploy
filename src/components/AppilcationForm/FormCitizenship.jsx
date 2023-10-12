import React from 'react';
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
} from '@mui/material';
const FormCitizenship = ({
  prevStep,
  nextStep,
  handleFieldChnage,
  values,
  isCitizen,
  setIsCitizen,
}) => {
  const continueTo = (e) => {
    e.preventDefault();
    nextStep();
  };

  const backTo = (e) => {
    e.preventDefault();
    prevStep();
  };

  const handleRadio = (e) => {
    handleFieldChnage('citizenShip');
    setIsCitizen((prev) => !prev);
  };
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Container component="main" maxwidth="md" sx={{ padding: 8 }}>
        <CssBaseline />
        <h1>Residency Status</h1>
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
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Container>
              <Grid container spacing={2} rowSpacing={8} width="900px">
                <Grid item xs={12} sm={12}>
                  <FormControl>
                    <FormLabel id="IsOtherName" sx={{ fontSize: '2rm' }}>
                      <Typography variant="h5" gutterBottom>
                        Are you an Australian/New Zealand citizen or an
                        Australian permanent resident?
                      </Typography>
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="IsOtherName"
                      name="citizenShip"
                      // onChange={handleFieldChnage('citizenShip')}
                      onChange={handleRadio}
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>

                {isCitizen && (
                  <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                      <FormLabel id="IsOtherName" sx={{ fontSize: '2rm' }}>
                        <Typography variant="h5" gutterBottom>
                          what type of visa do you have?
                        </Typography>
                      </FormLabel>
                      <Select
                        labelId="gender"
                        id="select-gender"
                        label="Gender"
                        defaultValue={values.gender}
                        onChange={handleFieldChnage('gender')}
                      >
                        <MenuItem value={''}>
                          {' '}
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={'skilled'}>Skilled Visa</MenuItem>
                        <MenuItem value={'workingHoliday'}>
                          Working Holiday
                        </MenuItem>
                        <MenuItem value={'studentVisa'}>Student Visa</MenuItem>
                        <MenuItem value={'businessVisa'}>
                          Business Visa
                        </MenuItem>
                        <MenuItem value={'familyAndSpousalVisa'}>
                          Family and Spousal Visa
                        </MenuItem>
                        <MenuItem value={'temporaryVisa'}>
                          Temporary Visa
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                )}
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

export default FormCitizenship;
