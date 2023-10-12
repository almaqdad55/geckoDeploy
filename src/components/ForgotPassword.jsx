import React, { useState } from 'react';
import { CognitoUser } from 'amazon-cognito-identity-js';
import Pool from '../constants/UserPool';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  CssBaseline,
  Box,
  Typography,
  Grid,
  Link,
  Button,
  Snackbar,
  SnackbarContent,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material';
import { pawdRegExp, phoneRegExp } from '../utils/Validate';
import ErrorAlert from './ErrorAlert';

const ForgotPassword = () => {
  const [stage, setStage] = useState(1);
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verifyError, setVerifyError] = useState(null);
  const navigate = useNavigate();

  const getUser = () => {
    return new CognitoUser({
      Username: email,
      Pool,
    });
  };

  const sendCode = (e) => {
    e.preventDefault();

    getUser().forgotPassword({
      onSuccess: (data) => {
        console.log('ForgotPassword onSuccess:', data);
      },
      onFailure: (err) => {
        console.error('ForgotPassword onFailure:', err);
      },
      inputVerificationCode: (data) => {
        console.log('Input code:', data);
        setStage(2);
      },
    });
  };

  const resetPassword = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.error('Passwords are not the same');
      return;
    }

    getUser().confirmPassword(code, password, {
      onSuccess: (data) => {
        console.log('onSuccess:', data);
        navigate('/');
      },
      onFailure: (err) => {
        setVerifyError(err.message);
        console.error('onFailure:', err);
      },
    });
  };

  return (
    <div style={{ backgroundColor: '#176C3F', height: '100vh', width: '100%' }}>
      {/* {error && <ErrorAlert message={error} />} */}

      {stage == 1 && (
        <Container component="main" maxWidth="md" sx={{ padding: 8 }}>
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
              Reset Password
            </Typography>
            <Box component="form" onSubmit={sendCode} noValidate sx={{ mt: 1 }}>
              <TextField
                sx={{ width: '400px' }}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Box textAlign="center">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 3,
                    mb: 2,
                    width: '70%',
                    backgroundColor: '#176C3F',
                  }}
                >
                  Send Verification Code
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      )}

      {stage == 2 && (
        <>
          {verifyError && <ErrorAlert message={verifyError} />}
          <Container component="main" maxWidth="xs" sx={{ padding: 8 }}>
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
                Reset Password
              </Typography>
              <Box
                component="form"
                onSubmit={resetPassword}
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
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
                <TextField
                  error={!password.match(pawdRegExp)}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  helperText={
                    !password.match(pawdRegExp)
                      ? 'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
                      : null
                  }
                />
                <TextField
                  error={password != confirmPassword}
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  helperText={
                    password != confirmPassword ? 'Password must match' : null
                  }
                />

                <Box textAlign="center">
                  {/* <Button variant="contained">My button</Button> */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      width: '70%',
                      backgroundColor: '#176C3F',
                    }}
                  >
                    Reset Password
                  </Button>
                </Box>
              </Box>
            </Box>
          </Container>
        </>
      )}
    </div>
  );
};

export default ForgotPassword;
