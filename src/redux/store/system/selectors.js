import { createSelector } from 'reselect';

const rootSelector = (state) => state.system;

export const errorSelector = createSelector(
  rootSelector,
  (state) => state.error
);

export const loadingSelector = createSelector(
  rootSelector,
  (state) => state.loading
);
