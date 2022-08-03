import { userConstants } from '../Constants/UserConstants';

export function userReducer(state = {}, action) {

  switch (action.type) {
    case userConstants.USERS:
      return {
        userData: action.data
      };
    default:
      return state;
  }

}