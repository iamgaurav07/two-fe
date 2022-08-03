import { authConstants } from '../Constants/AuthConstants';

export function authReducer(state = {}, action) {

  switch (action.type) {
    case authConstants.LOGIN:
      return {
        loading: true
      };
    default:
      return state;
  }

}