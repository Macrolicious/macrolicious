import * as types from '../constants/actionTypes';

export const updateUserData = (userData) => ({
  type: types.UPDATE_USER_DATA,
  payload: userData,
})

export const loginActionCreator = (userID, username) => ({
  type: types.LOGIN,
  payload: {userID, username}
})

export const addMealActionCreator = (meal) => ({
  type: types.ADD_MEAL,
  payload: meal,
})