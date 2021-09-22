import {combineReducers} from 'redux';
import userReducer from './userReducer';
import userLoginReducer from './userLoginReducer';

export default combineReducers({
  userReducer: userReducer,
  userLoginReducer: userLoginReducer,
});
