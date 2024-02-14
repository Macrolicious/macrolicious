import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import WeightTracker from './WeightTracker';
import MacrosLeft from './MacrosLeft';
import Header from './Header';
import AddMealModal from './AddMeal'
import AddMeal from './AddMealTest'

function Home() {
  const navigate = useNavigate()
  const meals = useSelector(state => state.meal.mealsArray);
  // const [isRegistered, setIsRegistered] = useState(false);
  const handleAddMeal = () => {
    // Logic for adding a new meal goes here
  
    console.log('Add new meal button clicked');
  };

  useEffect(() => {
    console.log('Meals updated:', meals);
  }, [meals]);

  return (
    <div className='Home'>
      <Header />
      <MacrosLeft />
      {/* {!isRegistered && <UserProfile />}
      {isRegistered && <button onClick={handleRegistration}></button>} */}
      <Button variant='contained' color='primary' onClick={handleAddMeal}>
        Add New Meal
      </Button>
      <AddMealModal />
      <AddMeal />
    </div>
  );
}

export default Home;
