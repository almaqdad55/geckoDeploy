import React, { useState, useContext } from 'react';
import { AuthContext } from '../hooks/useAuth';
import UserPool from '../constants/UserPool';
import gecko from '../assets/gecko3.png';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
import ErrorAlert from './ErrorAlert';

import {
  Container,
  CssBaseline,
  Box,
  Typography,
  TextField,
  Grid,
  Link,
  Button,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [redirecting, setRedirecting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setRedirecting(true);
      await login(email, password);
      navigate('/');
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      setRedirecting(false);
    }
  };

  return (
    <>
      {' '}
      {redirecting ? (
        <Loading />
      ) : (
        <div
          style={{ backgroundColor: '#176C3F', height: '100vh', width: '100%' }}
        >
          {error && <ErrorAlert message={error} />}
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
              <Box
                component="img"
                sx={{
                  maxHeight: 200,
                  maxWidth: 80,
                }}
                alt="Gecko"
                src={gecko}
              />
              <Typography component="h1" variant="h5" sx={{ mt: 2, mb: 2 }}>
                Sign in
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
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
                <TextField
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
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: '#176C3F' }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/resetPassword" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signup" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </div>
      )}
    </>
  );
};

export default SignIn;
