import React, { useState } from 'react';
import { Modal, Box, Typography, Tab, Tabs, TextField, Button } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AddMealModal() {
  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Placeholder for form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement your submit logic here
    console.log("Form submitted");
  };

  return (
    <div>
      <Button onClick={handleOpen}>Add Meal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Your Meal
          </Typography>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="Search" {...a11yProps(0)} />
              <Tab label="Custom" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={tabValue} index={0}>
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="search-name"
                label="Search for a meal"
                name="search"
                autoComplete="off"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="search-grams"
                label="Grams"
                name="grams"
                type="number"
                autoComplete="off"
              />
              {/* Implement search logic and autofill */}
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Submit
              </Button>
            </form>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <form onSubmit={handleSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="custom-name"
                label="Meal Name"
                name="name"
                autoComplete="off"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="custom-grams"
                label="Serving Size (grams)"
                name="servingSize"
                type="number"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="custom-calories"
                label="Calories"
                name="calories"
                type="number"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="custom-protein"
                label="Protein (g)"
                name="protein"
                type="number"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="custom-carbs"
                label="Carbs (g)"
                name="carbs"
                type="number"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="custom-fat"
                label="Fat (g)"
                name="fat"
                type="number"
              />
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                Submit
              </Button>
            </form>
          </TabPanel>
        </Box>
      </Modal>
    </div>
  );
}