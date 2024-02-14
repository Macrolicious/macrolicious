import * as types from '../constants/actionTypes';


const initialState = {
  isLoggedIn: false,
  userID: null,
  username: '',
  weight: 0,
  height: 0,
  age: 0,
  activityLevel: '',
};

//dropdown, keys (1, 2, 3, 4, 5);
const activityLevels = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  very: 1.725,
  extra: 1.9,
}


  //include reducers here for handling actions/update state
  const userReducer = (state = initialState, action) => {
    switch(action.type) {
      case types.LOGIN:
        return{
          ...state,
          isLoggedIn: true,
          userID: action.payload.userID,
          username: action.payload.username
        }

      case types.UPDATE_USER_DATA:
        return {
          ...state,
          username: action.payload.username,
          weight: action.payload.weight,
          height: action.payload.height,
          age: action.payload.age,
          activityLevel: action.payload.activityLevel,
        };
      default:
        return state;
    }
  }


export default userReducer;