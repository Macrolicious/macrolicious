import React, { useState } from 'react';
import Button from '@mui/material/Button';
import WeightTracker from './WeightTracker';
import MacrosLeft from './MacrosLeft';
import Header from './Header';

function Home() {
  // const [isRegistered, setIsRegistered] = useState(false);
  const handleAddMeal = () => {
    // Logic for adding a new meal goes here
    console.log('Add new meal button clicked');
  };

  return (
    <div className='Home'>
      <Header />
      <MacrosLeft />
      {/* {!isRegistered && <UserProfile />}
      {isRegistered && <button onClick={handleRegistration}></button>} */}
      <Button variant='contained' color='primary' onClick={handleAddMeal}>
        Add New Meal
      </Button>
      {/* <WeightTracker /> */}
    </div>
  );
}

export default Home;
