import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import WeightTracker from './WeightTracker';
import MacrosLeft from './MacrosLeft';
import Header from './Header';
import MealLog from './MealLog';

function Home() {
  // const [isRegistered, setIsRegistered] = useState(false);
  const handleAddMeal = () => {
    // Logic for adding a new meal goes here
    console.log('Add new meal button clicked');
  };

  const handleTrackWorkout = () => {
    // Logic for adding a new meal goes here
    console.log('Add new meal button clicked');
  };

  const meals = [
    { name: 'Breakfast', calories: 500, date: '2022-01-01' },
    { name: 'Lunch', calories: 600, date: '2022-01-01' },
    { name: 'Dinner', calories: 700, date: '2022-01-01' },
  ]
  const plannedMacros = {
    carbs: 200,
    protein: 150,
    fat: 70,
  };
  const totalCalories = meals.reduce((total, meal) => total + meal.calories, 0);
  return (
    <div className='Home'>
      <Header />
      <Typography variant='h6' component='div'>
        Total Calories: 2000 // this will be calculated from the profile
      </Typography>
      <Typography variant='h6' component='div'>
        Planned Macros - Carbs: {plannedMacros.carbs}g, Protein: {plannedMacros.protein}g, Fat: {plannedMacros.fat}g
      </Typography>
      <MacrosLeft calories={totalCalories}/>
      <MealLog  meals={meals}/>
      {/* {!isRegistered && <UserProfile />}
      {isRegistered && <button onClick={handleRegistration}></button>} */}
      <Button variant='contained' color='primary' onClick={handleAddMeal}>
        Add New Meal
      </Button>
      <Button variant='contained' color='primary' onClick={handleTrackWorkout}>
        Track Workout
      </Button>
      {/* <WeightTracker /> */}
    </div>
  );
}

export default Home;
