import React from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginActionCreator } from '../actions/userActions'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()

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

    } catch (err) {
      console.error(
        'error caught in handleAuth in LoginContainer',
        err.message
      );
    }
  };


  return (
    <Container component="main" maxWidth="xs" style={{ 
      backgroundImage: `url('data:image/jpeg;base64,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')`, 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover', 
      height: '100vh' 
    }}>
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