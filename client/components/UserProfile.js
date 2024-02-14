import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../actions/userActions';

const UserProfile = props => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    userName: '',
    weight: 0,
    height: 0,
    age: 0,
    activityLevel: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({...userData, [name]: value });
  };


  async function handleSubmit(e) {
    e.preventDefault();
    const { userName, weight, height, age, activityLevel } = e.target;
    if( userName === '' || weight <= 0 || height <= 0 || age <= 0 || activityLevel === ''){
      console.log('enter valid user profile')//  info does NOT checkout (we need some error message here)
    } else { //  info checks out 
      dispatch(updateUserData(userData));
    }
  };

  return ( //  we will probably remove the userName thing later and userName will saved across pages
    <div>
      {/* <div>
        <p>userName</p>
        <input
          type="text"
          name="userName"
          value={userData.userName}
          onChange={handleInputChange}
        />
      </div> */}
      <div>
        <p>Weight:</p>
        <input
        type="number"
        name="weight"
        value={userData.weight}
        onChange={handleInputChange}
      />
      </div>
    <div>
      <p>Height:</p>
      <input
        type="number"
        name="height"
        value={userData.height}
        onChange={handleInputChange}
      />
    </div>
    <div>
      <p>Age:</p>
      <input
        type="number"
        name="age"
        value={userData.age}
        onChange={handleInputChange}
      />
    </div>
    <div>
      <p>Activity Level:</p>
      <input
        type="number"
        name="activityLevel"
        value={userData.activityLevel}
        onChange={handleInputChange}
      />
    </div>
    <button onClick={handleSubmit}>Submit</button>
  </div>
  );



};

export default UserProfile;