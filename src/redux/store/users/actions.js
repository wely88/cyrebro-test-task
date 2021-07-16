import { createAction } from 'redux-actions';
import axios from 'axios';
import { setLoading, setError } from '../system/actions';

const PREFIX = 'USERS';

export const SET_USERS = `${PREFIX}/SET_USERS`;
export const SET_FILTERED_USERS = `${PREFIX}/SET_FILTERED_USERS`;

export const setAllUsers = createAction(SET_USERS);
export const setFilteredUsers = createAction(SET_FILTERED_USERS);


export const getAllUsers = () => (dispatch) => {
	axios.get(`https://jsonplaceholder.typicode.com/users`)
	.then((res) => {
		dispatch(setAllUsers(res.data));
		dispatch(setLoading(false));
	})
	.catch((e) => {
		dispatch(setError(true));
		console.error(e);
	});
};

export const setSearch = (value) => (dispatch, getState) => {
	if (value.length) {
		const usersState = getState().users.users;
		const fields = ['name', 'username', 'email', 'phone', 'website'];
		const filteredData = usersState.filter(item => {
		return Object.keys(item).some(key => 
			fields.includes(key) ? item[key].toLowerCase().includes(value.toLowerCase()) : null
		)});
		dispatch(setFilteredUsers(filteredData));
	} else {
		dispatch(setFilteredUsers([]));
	}
}

export const setOrder = (gridParams) => (dispatch, getState) => {
	const usersState = getState().users.users;
	const column = gridParams.sortModel.length ? gridParams.sortModel[0]?.field : 'id';
	const order = gridParams.sortModel[0]?.sort;

	const orderedData = order === 'desc' ?
		usersState.slice().sort((a,b) => (b[column] > a[column]) ? 1 : ((a[column] > b[column]) ? -1 : 0))
		:
		usersState.slice().sort((a,b) => (a[column] > b[column]) ? 1 : ((b[column] > a[column]) ? -1 : 0))

		dispatch(setAllUsers(orderedData));
}
