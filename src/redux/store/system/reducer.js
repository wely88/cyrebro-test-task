import { handleActions } from 'redux-actions';
import * as ACTIONS from './actions';

const INITIAL_STATE = {
	error: false,
	loading: true
};

export default handleActions(
  {
		[ACTIONS.SET_ERROR]: (s, { payload }) => ({
      ...s,
      error: payload,
    }),
		[ACTIONS.SET_LOADING]: (s, { payload }) => ({
      ...s,
      loading: payload,
    }),
  },
  INITIAL_STATE
);
