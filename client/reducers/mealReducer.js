import * as types from '../constants/actionTypes';


const initialState = {
mealsArray: []
};

  //include reducers here for handling actions/update state
  const mealReducer = (state = initialState, action) => {
    switch(action.type) {
      case types.ADD_MEAL:
        return{
          ...state,
          mealsArray: [...state.mealsArray, action.payload] 
        }

      default:
        return state;
    }
  }


export default mealReducer;