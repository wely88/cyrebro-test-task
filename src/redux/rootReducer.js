import { combineReducers } from 'redux';
import users from './store/users/reducer';
import system from './store/system/reducer';

export default combineReducers({
  users,
	system
});