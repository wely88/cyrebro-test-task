import { createAction } from 'redux-actions';

const PREFIX = 'SYSTEM';

export const SET_ERROR = `${PREFIX}/SET_ERROR`;
export const SET_LOADING = `${PREFIX}/SET_LOADING`;

export const setError = createAction(SET_ERROR);
export const setLoading = createAction(SET_LOADING);

