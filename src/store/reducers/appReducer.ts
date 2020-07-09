import actionTypes from 'store/actionTypes';
import { createReducer } from '../helpers';

const initialState = {
  sortBy: 'release date',
  searchBy: 'title',
  searchQuery: '',
};

const appReducer = createReducer(initialState, {
  [actionTypes.UPDATE_SEARCH_QUERY](state, { searchQuery }) {
    return { ...state, searchQuery };
  },
  [actionTypes.UPDATE_SEARCH_BY](state, { searchBy }) {
    return { ...state, searchBy };
  },
  [actionTypes.UPDTAE_SORTING](state, { sortBy }) {
    return { ...state, sortBy };
  },
});

export default appReducer;
