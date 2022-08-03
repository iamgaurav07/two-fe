import { combineReducers } from 'redux';
import { authReducer } from './AuthReducers';
import { userReducer } from './UserReducers'

const rootReducer = combineReducers({
    authReducer,
    userReducer
})

export default rootReducer;