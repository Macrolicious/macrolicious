import * as types from '../constants/actionTypes';

export const updateUserData = (userData) => ({
  type: types.UPDATE_USER_DATA,
  payload: userData,
})