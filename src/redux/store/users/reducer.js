import { handleActions } from 'redux-actions';
import * as ACTIONS from './actions';

const INITIAL_STATE = {
  users: [],
	filteredUsers: [],
};

export default handleActions(
  {
    [ACTIONS.SET_USERS]: (s, { payload }) => ({
      ...s,
      users: payload,
    }),
		[ACTIONS.SET_FILTERED_USERS]: (s, { payload }) => ({
      ...s,
      filteredUsers: payload,
    }),
  },
  INITIAL_STATE
);
