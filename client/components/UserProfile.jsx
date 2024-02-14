import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../actions/userActions';
import { Box, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useSelector } from 'react-redux';



const UserProfile = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(
    {
        username: '',
        weight: 0,
        height: 0,
        age: 0,
        activityLevel: 0,
      }
  );
    

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const parseValue = name !== 'username' ? parseInt(value) : value;
    setUserData({...userData, [name]: parseValue });
  };

  const stateVar = () => {
    const userData = useSelector(state => 
      console.log('state import: ', state)
      );

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, weight, height, age, activityLevel } = userData;
    console.log('this is userData: ', username, weight, height, age, activityLevel);
    if( username === '' || weight <= 0 || height <= 0 || age <= 0 || activityLevel <= 0){
      console.log('Enter valid user profile'); // Show error message
    } else {
      console.log('Dispatching user data:', userData);
      dispatch(updateUserData(userData));

      return await stateVar();
    }
  };


  return (
    <div className="user-profile">
      <Box  width='20vw' sx={{ textAlign: 'center', paddingBottom: '10px' }}>
        <TextField
          type="text"
          name="username"
          label="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <TextField
          type="number"
          name="weight"
          label="Weight"
          value={userData.weight}
          onChange={handleInputChange}
          
        />
        <TextField
          type="number"
          name="height"
          label="Height"
          value={userData.height}
          onChange={handleInputChange}
          
        />
        <TextField
          type="number"
          name="age"
          label="Age"
          value={userData.age}
          onChange={handleInputChange}
          
        />
        <FormControl fullWidth>
          <InputLabel>Activity Level</InputLabel>
          <Select
            name="activityLevel"
            value={userData.activityLevel}
            onChange={handleInputChange}
          >
            <MenuItem value={0}>Select Activity Level</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default UserProfile;


/*
export default function FormComponentEditor({
  idx,
  open,
  closeEditor,
  isLeaf,
}) {
  const dispatch = useDispatch();
  const { pages } = useSelector((state) => state.designV3);
  const { selectedPageIdx } = useSelector((state) => state.app);
  const component = pages[selectedPageIdx].components[idx];
  const [props, setProps] = useState(component.props);
  const [styles, setStyles] = useState(component.styles);
  const theme = useTheme();

  const deleteMessage = isLeaf
    ? {
        severity: 'success',
        text: 'Successfully removed a component ' + component.name,
      }
    : {
        severity: 'error',
        text: `Component ${component.name} has children. Failed to remove`,
      };

  function handleSumbit(e) {
    e.preventDefault();
    const body = {
      name: e.target.name.value,
      htmlTag: isLeaf ? e.target.htmlTag.value : '',
      innerHtml: isLeaf ? e.target.innerHtml.value : '',
      styles: convertArrToObj(styles),
      props: convertArrToObj(props),
      pageIdx: selectedPageIdx,
    };
    if (isValidVariableName(body.name)) {
      try {
        dispatch(submitComponentForm({ componentId: component._id, body }));
        setMessage({ severity: 'success', text: 'Saved successfully.' });
        closeEditor();
      } catch (err) {
        setMessage({
          severity: 'error',
          text: 'Design: update component: ' + err,
        });
      }
    } else {
      dispatch(
        setMessage({
          severity: 'error',
          text: 'React component name must start with an uppercase letter.',
        })
      );
    }
  }
  return (
    <Modal
      sx={{
        background: '415a77',
      }}
      open={open}
      onClose={closeEditor}
    >
      <Box
        component='form'
        className='componentEditor'
        sx={{
          ...boxStyle,
          bgcolor: theme.palette.mode === 'light' ? '#f4f3f7' : '#2D2D2D',
          color: theme.palette.mode === 'light' ? '#414141' : '#FFFFFF',
        }}
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gap={2}
        onSubmit={handleSumbit}
      >
        <NameAndParent idx={idx} name={component.name} />

        {isLeaf && (
          <HtmlData
            idx={idx}
            isLeaf={isLeaf}
            innerHtml={component.inner_html}
          />
        )}

        <Box gridColumn='span 12'>
          <Divider />
        </Box>

        <AddData data={props} setData={setProps} dataName={'Props'} />
        <AddData data={styles} setData={setStyles} dataName={'Styles'} />

        <Box gridColumn='span 4'>
          {idx > 0 && (
            <Button
              variant='outlined'
              color='error'
              onClick={() => {
                if (isLeaf) {
                  disp;
                  closeEditor();
                }
                dispatch(setMessage(deleteMessage));
              }}
            >
              Delete
            </Button>
          )}
        </Box>

        <Box gridColumn='span 4'>
          <Button color='primary' variant='contained' onClick={closeEditor}>
            Cancel
          </Button>
        </Box>

        <Box gridColumn='span 4'>
          <Button variant='contained' color='success' type='submit'>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
*/
