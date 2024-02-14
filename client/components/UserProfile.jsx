import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../actions/userActions';

const UserProfile = props => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: '',
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
    const { username, weight, height, age, activityLevel } = e.target;
    if( username === '' || weight <= 0 || height <= 0 || age <= 0 || activityLevel === ''){
      console.log('enter valid user profile')//  info does NOT checkout (we need some error message here)
    } else { //  info checks out 
      dispatch(updateUserData(userData));
    }
  };

  return ( //  we will probably remove the username thing later and username will saved across pages
    <div className="user-profile">
      <div>
        <p>username</p>
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
      </div>
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
      <select
        name="activityLevel"
        value={userData.activityLevel}
        onChange={handleInputChange}
      >
        <option value="">Select Activity Level</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
    <button className="submit-btn" onClick={handleSubmit}>Submit</button>
  </div>
  );



};

export default UserProfile;