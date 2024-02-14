import React from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';
import { useState } from 'react';
import UserProfile from './UserProfile';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(true);   //  ***** LEAVE MESSAGE HERE UNTIL USESTATE = FALSE ***** 
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username, 'Password:', password);

    //simulate successful login
    setIsLoggedIn(true);
  };
  const handleRegistration = () => {
    setIsRegistered(true);
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
      { isLoggedIn && !isRegistered && <UserProfile /> }

      {!isRegistered && (
        <Button onClick={handleRegistration} fullWidth> 
          Register
        </Button>
      )}
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