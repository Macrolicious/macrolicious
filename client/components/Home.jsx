import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import WeightTracker from './WeightTracker';
import MacrosLeft from './MacrosLeft';
import Header from './Header';
import AddMealModal from './AddMeal'
import AddMeal from './AddMealTest'
import MealLog from './MealLog';

function Home() {
  const navigate = useNavigate()
  const mealsArray = useSelector(state => state.meal.mealsArray);
  // const [isRegistered, setIsRegistered] = useState(false);
  const handleAddMeal = () => {
    // Logic for adding a new meal goes here
  
    console.log('Add new meal button clicked');
  };

  useEffect(() => {
    console.log('Meals updated:', mealsArray);
  }, [mealsArray]);
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
  const calculatedCalories = 2500 
  return (
    <div className='Home'>
      <Header />
      <Typography variant='h6' component='div'>
        Total Calories: {calculatedCalories}// this will be calculated from the profile
      </Typography>
      <Typography variant='h6' component='div'>
        Planned Macros - Carbs: {plannedMacros.carbs}g, Protein: {plannedMacros.protein}g, Fat: {plannedMacros.fat}g
      </Typography>
      <MacrosLeft calories={totalCalories} totalCalories={calculatedCalories} fat={plannedMacros.fat} protein={plannedMacros.protein} carbs={plannedMacros.carbs}/>
      <MealLog  meals={meals}/>
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
