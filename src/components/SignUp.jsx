import React, { useState, useContext } from 'react';
import UserPool from '../constants/UserPool';
import gecko from '../assets/gecko3.png';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { object, string, number, date, InferType } from 'yup';
import { pawdRegExp, phoneRegExp } from '../utils/Validate';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextFields from './TextFields';
import ErrorAlert from './ErrorAlert';
import { AuthContext } from '../hooks/useAuth';

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
} from '@mui/material';

import ErrorIcon from '@mui/icons-material/Error';
import CloseIcon from '@mui/icons-material/Close';
import Loading from './Loading';

// create schema validation
const schema = yup.object({
  familyName: yup.string().required('Family Name is required'),
  givenNames: yup.string().required('Given Name(s) is required'),
  email: yup.string().required('Email is required').email(),
  mobile: yup
    .string()
    .required('Mobile Phone is required')
    .matches(phoneRegExp, 'Phone number is not valid'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      pawdRegExp,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match'),
  // privacy: yup.bool().oneOf([true], 'Field must be checked'),
});

const SignUp = () => {
  const [error, setError] = useState(null);
  const [verifyError, setVerifyError] = useState(null);
  const [siginUpError, setSignUpError] = useState(null);
  const [errorOpen, setErrorOpen] = useState(false);
  const [redirecting, setRedirecting] = useState(false);
  const [verifyAccount, setVerifyAccount] = useState(false);
  const [verfiyCode, setVerfiyCode] = useState('');
  const [verifyEmail, setVerifyEmail] = useState('');
  const navigate = useNavigate();
  const { verifyUser } = useContext(AuthContext);

  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
      // privacy: false,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ email, password, mobile, givenNames, familyName }) => {
    // e.preventDefault();

    try {
      setRedirecting(true);
      UserPool.signUp(
        email,
        password,
        [
          { Name: 'given_name', Value: givenNames },
          { Name: 'family_name', Value: familyName },
          { Name: 'phone_number', Value: '+61'.concat(mobile) },
        ],
        null,
        (err, data) => {
          if (err) {
            console.log(err);
            setError(JSON.stringify(err.message));
          } else {
            console.log(data);
            setVerifyAccount(true);
            setVerifyEmail(email);
            // navigate('/');
          }
        }
      );
    } catch (err) {
      console.error(err);
      setError('Failed to sigin up');
    } finally {
      setRedirecting(false);
    }
  };

  const handleVerifySubmit = (e) => {
    e.preventDefault();

    try {
      verifyUser(verifyEmail, verfiyCode, (err, result) => {
        if (err) {
          setVerifyError(err.message);
        } else {
          navigate('/');
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {redirecting ? (
        <Loading />
      ) : !verifyAccount ? (
        <div
          style={{ backgroundColor: '#176C3F', height: '100vh', width: '100%' }}
        >
          <Container component="main" maxWidth="md" sx={{ padding: 8 }}>
            {error && <ErrorAlert message={error} />}
            <CssBaseline />
            <Box
              sx={{
                padding: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#e5e5e5',
              }}
            >
              <Box
                component="img"
                sx={{
                  maxHeight: 200,
                  maxWidth: 80,
                }}
                alt="Gecko"
                src={gecko}
              />
              <Typography component="h1" variant="h5" sx={{ mb: 2, mt: 2 }}>
                Create New Account
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{ mt: 1 }}
              >
                <Container>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextFields
                        errors={errors}
                        name="givenNames"
                        label="Given Name(s)"
                        control={control}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextFields
                        errors={errors}
                        name="familyName"
                        label="Family Name"
                        control={control}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextFields
                        label="Email"
                        errors={errors}
                        name="email"
                        control={control}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextFields
                        errors={errors}
                        control={control}
                        name="mobile"
                        label="Mobile Phone"
                        inputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              +61
                            </InputAdornment>
                          ),
                          type: 'number',
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextFields
                        errors={errors}
                        type="password"
                        name="password"
                        label="Password"
                        control={control}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextFields
                        errors={errors}
                        type="password"
                        name="confirmPassword"
                        label="Confirm Password"
                        control={control}
                      />
                    </Grid>
                  </Grid>
                </Container>

                <Box textAlign="center">
                  {/* <Button variant="contained">My button</Button> */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      width: '50%',
                      backgroundColor: '#176C3F',
                    }}
                  >
                    Sign Up
                  </Button>
                </Box>
              </Box>
              <Link href="/login" variant="body2">
                {'Already have an account? Sign In'}
              </Link>
            </Box>
          </Container>
        </div>
      ) : (
        <div
          style={{ backgroundColor: '#176C3F', height: '100vh', width: '100%' }}
        >
          {' '}
          <Container component="main" maxWidth="xs" sx={{ padding: 8 }}>
            {verifyError && <ErrorAlert message={verifyError} />}
            <CssBaseline />
            <Box
              sx={{
                padding: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#e5e5e5',
              }}
            >
              <Typography component="h1" variant="h5">
                Enter Verification Code
              </Typography>
              <Box
                component="form"
                onSubmit={handleVerifySubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="code"
                  label="Verification Code"
                  name="code"
                  autoFocus
                  value={verfiyCode}
                  onChange={(e) => setVerfiyCode(e.target.value)}
                />
                <Box textAlign="center">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      width: '100%',
                      backgroundColor: '#176C3F',
                    }}
                  >
                    Verify
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
        </div>
      )}
    </>
  );
};

export default SignUp;
