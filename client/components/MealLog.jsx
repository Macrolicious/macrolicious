import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

function MealLog({ meals }) {
  return (
    <List>
      {meals.map((meal, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={meal.name}
            secondary={`Calories: ${meal.calories}, Date: ${meal.date}`}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default MealLog;