import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMealActionCreator } from '../actions/userActions'
import { Modal, Box, Typography, TextField, Button, Switch, FormControlLabel } from '@mui/material';

const AddMeal = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false);
  const [custom, setCustom] = useState(true)
  const [meal, setMeal] = useState({
    name: '',
    serving: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: ''
  })
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setCustom(true)    
    setOpen(false)
  };

  const handleInput = (input) => {
    const {name, value } = input.target
    console.log(name, value)
    setMeal(prevMeal => ({
      ...prevMeal,
      [name]: value
    }))
    console.log(meal)
  }

  const handleSubmit = () => {
    dispatch(addMealActionCreator(meal))
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Meal 2</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Meal
          </Typography>
          <FormControlLabel
            control={<Switch checked={!custom} onChange={() => setCustom(!custom)} />}
            label="Search"
          />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {custom ? 'Enter the details of the meal you want to add' : 'Search for a meal or food item'}
          </Typography>
          
          <Box display="flex" alignItems="center" gap={2}>
            <TextField name="name" onChange={handleInput} label="Meal Name" fullWidth margin="normal" />
            {!custom && (
              <Button onClick={handleSearch()} variant="contained">Go!</Button>
            )}
          </Box>

          {custom ? (
            <>
              <TextField name="serving" onChange={handleInput} label="Serving Size (grams)" fullWidth margin="normal" type="number" />
              <TextField name="calories" onChange={handleInput} label="Calories" fullWidth margin="normal" type="number" />
              <TextField name="protein" onChange={handleInput} label="Protein (g)" fullWidth margin="normal" type="number" />
              <TextField name="carbs" onChange={handleInput} label="Carbs (g)" fullWidth margin="normal" type="number" />
              <TextField name="fat" onChange={handleInput} label="Fat (g)" fullWidth margin="normal" type="number" />
            </>
          ) : null}
          
          <Button onClick={handleSubmit} sx={{ mt: 2 }}>
            Save
          </Button>
          <Button onClick={handleClose} sx={{ mt: 2 }}>
            Close
          </Button>
        </Box> 
      </Modal>
    </div>
  );
};

export default AddMeal