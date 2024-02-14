import React from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginActionCreator } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {

      console.log(username, password)
      const reqOpts = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      }

      const response = await fetch('/api/signin', reqOpts)

      console.log('$!$!$!$$!$!!$!$!$!$$!$!!$!$$!!$!$!$!$', response)

      const data = await response.json()

      if (!response.ok) throw new Error(data.error || 'error from sever')

      console.log(`USER ID IS ${data.userID} AND USERNAME IS ${data.username}`)

      dispatch(loginActionCreator(data.userID, data.username))

      navigate('/home')

    } catch (err) {
      console.error(
        'error caught in handleAuth in LoginContainer',
        err.message
      );
    }
  };


  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
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
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </form>
      {/* if user is logged in but not registered show userprofile */}
    </Container>
  );
};

export default Login

  //  2 variables for handling state [isLoggedIn, setIsLoggedIn] = useState(false)
  //  IsRegistered, setIsRegistered 
  // user clicks register button on login component. This routes user to a registration page.
  // on the registration page we have inputs for 
  // -username
  // -password
  // -weight, activity level
  // -etc…
  
  // when user ‘submits’ this form we send a post request to our database vai express route to store the user’s information.
  // if the response.ok property is truethy, useDispatch to set the isLoggedIn variable in the user slice of redux state via action.