import * as types from '../constants/actionTypes';

export const updateUserData = (userData) => ({
  type: types.UPDATE_USER_DATA,
  payload: { ...userData},
}, () => {return console.log('The Data has reached the action:',userData)})

export const loginActionCreator = (userID, username) => ({
  type: types.LOGIN,
  payload: {userID, username}
})