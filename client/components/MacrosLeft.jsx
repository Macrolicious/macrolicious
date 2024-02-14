import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

function Macros({
  carbs,
  protein,
  fat,
  carbsLeft,
  proteinLeft,
  fatLeft,
  calories,
  totalCalories,
}) {
  return (
    <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column'}}>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant='h5' component='div'>
              Eaten Today
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Calories: {calories}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Carbs: {carbs}g
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Protein: {protein}g
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Fat: {fat}g
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card>
          <CardContent>
            <Typography variant='h5' component='div'>
              Goal for Today
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Calories Left: {totalCalories - calories}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Carbs: {carbs}g
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Protein: {protein}g
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Fat: {fat}g
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Macros;
