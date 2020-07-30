import actionTypes from 'store/actionTypes';
import { MovieInfo } from 'entities';
import { createReducer } from '../helpers';

const initialState = {
  isFetching: false,
  movies: null,
  error: null,
  currentMovie: null,
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
  [actionTypes.UPDATE_CURRENT_MOVIE](state, { movieId }) {
    const currentMovie = state.movies?.find(({ id }: MovieInfo) => movieId === id);
    return { ...state, currentMovie };
  },
});

export default movieReducer;
