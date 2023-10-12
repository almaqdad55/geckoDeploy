import React, { useContext, useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthContext } from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import gecko from '../assets/gecko3.png';
import { useNavigate } from 'react-router-dom';

const pages = [
  { name: 'Credit Cards', url: '/creditCards' },
  // { name: 'Loans', url: '/loans' },
  { name: 'Transactions', url: '/transactions' },
  { name: 'Apply', url: '/apply' },
];
const pagesd = ['Credit Cards', 'Loans', 'ID Verifications', 'Apply'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export default function ButtonAppBar({ isLoggedIn }) {
  //   const { getSession, logout, authenticate } = useContext(AccountContext);
  const { currentUser, setCurrentUser, logout, getSession } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getSession()
      .then((data) => {
        setCurrentUser(data);
        //setUserObject(data);
      })
      .catch((err) => {
        setCurrentUser(null);
        console.error(err);
      });
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#176C3F' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            component={Link}
            to={'/'}
          >
            <Box
              component="img"
              sx={{
                maxHeight: 100,
                maxWidth: 80,
              }}
              alt="Gecko"
              con
              src={gecko}
            />
          </IconButton>
          {/* <Typography variant="h6" component="div">
            Gecko
          </Typography> */}
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyItems: 'center',
              justifyContent: 'content',
              gap: 1,
              ml: 5,
            }}
          >
            {pages.map((page) => (
              <Button
                to={page.url}
                component={Link}
                color="inherit"
                key={page.name}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyItems: 'center',
              justifyContent: 'content',
              gap: 1,
            }}
          >
            {currentUser && (
              <Typography variant="h6" component="div" sx={{ mt: 0.3 }}>
                {currentUser?.given_name}
              </Typography>
            )}

            {currentUser ? (
              <Button onClick={handleLogout} color="inherit">
                Logout
              </Button>
            ) : (
              <Button to={'login'} component={Link} color="inherit">
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
