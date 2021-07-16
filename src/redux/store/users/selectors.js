import { createSelector } from 'reselect';

const rootSelector = (state) => state.users;

export const allUsersSelector = createSelector(
  rootSelector,
  (state) => state.users
);

export const filteredUsersSelector = createSelector(
  rootSelector,
  (state) => state.filteredUsers
);


