import actionTypes from 'store/actionTypes';
import { createReducer } from '../helpers';

const initialState = {
  isFetching: false,
  movies: null,
  error: null,
};

const movieReducer = createReducer(initialState, {
  [actionTypes.FETCHING_DATA](state, { isFetching }) {
    return { ...state, isFetching };
  },
  [actionTypes.FETCHING_DATA_SUCCESS](state, { movies }) {
    return { ...state, movies };
  },
  [actionTypes.FETCHING_DATA_ERROR](state, { error }) {
    return { ...state, error };
  },
});

export default movieReducer;
