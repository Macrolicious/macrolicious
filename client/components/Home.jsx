import React, { useState } from 'react';
import Button from '@mui/material/Button';
import WeightTracker from './WeightTracker';
import MacrosLeft from './MacrosLeft';
import Header from './Header';
import UserProfile from './UserProfile';

function Home() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleRegistration = () => {
    setIsRegistered(true);
  };

 const handleUserDataSubmit = (userData) => {
  setUserData(userData);
  setIsRegistered(true);
 }

  const handleAddMeal = () => {
    // Logic for adding a new meal goes here
    console.log('Add new meal button clicked');
  };

  

  return (
    <div className='Home'>
      <Header />
      {isRegistered && (
        <div>
          <MacrosLeft />
          <Button variant='contained' color='primary' onClick={handleAddMeal}>
            Add New Meal
          </Button>
          {/* <WeightTracker /> */}
        </div>
      )}

      {!isRegistered && (
        <div>
          <UserProfile onUserDataSubmit={handleUserDataSubmit}/>
          <Button onClick={handleRegistration}>Verify personal information</Button>
        </div>
      )}
    </div>
  );
}

export default Home;
