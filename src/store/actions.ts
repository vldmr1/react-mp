import axios from 'axios';
import getMovieURL from 'utils';
import { Dispatch } from 'react';
import { Action } from 'redux';
import { RootState } from 'entities';
import { makeActionCreator } from './helpers';
import actionTypes from './actionTypes';

// APP
export const updateSorting = makeActionCreator(actionTypes.UPDTAE_SORTING, 'sortBy');
export const updateSearchBy = makeActionCreator(actionTypes.UPDATE_SEARCH_BY, 'searchBy');
export const updateSearchQuery = makeActionCreator(actionTypes.UPDATE_SEARCH_QUERY, 'searchQuery');

// DATA
export const fetchingData = makeActionCreator(actionTypes.FETCHING_DATA, 'isFetching');
export const dataSuccess = makeActionCreator(actionTypes.FETCHING_DATA_SUCCESS, 'movies');
export const dataError = makeActionCreator(actionTypes.FETCHING_DATA_ERROR, 'error');

export const fetchMovies = () => (dispatch: Dispatch<Action>, getState: () => RootState): void => {
  const { searchQuery, sortBy, searchBy } = getState().app;

  dispatch(fetchingData(true));
  axios.get(getMovieURL({ searchQuery, sortBy, searchBy }))
    .then(({ data }): void => {
      dispatch(dataSuccess(data.data));
    })
    .catch((error): void => {
      dispatch(dataError(error.message));
    })
    .finally((): void => {
      dispatch(fetchingData(false));
    });
};
