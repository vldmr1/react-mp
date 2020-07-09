import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import actionTypes from 'store/actionTypes';
import { mockData, store } from 'mocks';
import {
  updateSorting,
  updateSearchBy,
  updateSearchQuery,
  fetchingData,
  dataSuccess,
  dataError,
  fetchMovies,
} from 'store/actions';

describe('App action creators', () => {
  it('should create an action to update sorting order', () => {
    const sortBy = 'release date';
    const expectedAction = {
      type: actionTypes.UPDTAE_SORTING,
      sortBy,
    };

    expect(updateSorting(sortBy)).toEqual(expectedAction);
  });

  it('should create an action to update search criteria', () => {
    const searchBy = 'title';
    const expectedAction = {
      type: actionTypes.UPDATE_SEARCH_BY,
      searchBy,
    };

    expect(updateSearchBy(searchBy)).toEqual(expectedAction);
  });

  it('should create an action to update search query', () => {
    const searchQuery = 'Godzilla';
    const expectedAction = {
      type: actionTypes.UPDATE_SEARCH_QUERY,
      searchQuery,
    };

    expect(updateSearchQuery(searchQuery)).toEqual(expectedAction);
  });
});

describe('Data action creators', () => {
  it('should create an action to update fetching status', () => {
    const isFetching = true;
    const expectedAction = {
      type: actionTypes.FETCHING_DATA,
      isFetching,
    };

    expect(fetchingData(isFetching)).toEqual(expectedAction);
  });

  it('should create an action to update fetching error', () => {
    const error = 'error';
    const expectedAction = {
      type: actionTypes.FETCHING_DATA_ERROR,
      error,
    };

    expect(dataError(error)).toEqual(expectedAction);
  });

  it('should create an action to update movie data', () => {
    const movies = mockData;
    const expectedAction = {
      type: actionTypes.FETCHING_DATA_SUCCESS,
      movies,
    };

    expect(dataSuccess(movies)).toEqual(expectedAction);
  });
});

describe('Async acttions', () => {
  const middlewares = [thunk];
  // type DispatchExts = ThunkDispatch<RootState, Promise<any>, AnyAction>;
  const mockStore = configureMockStore(middlewares);

  afterEach(() => {
    fetchMock.reset();
  });

  it('dispatches FETCHING_DATA_SUCCESS when movies have been fetched', () => {
    const mockResponse = { data: { data: mockData } };
    fetchMock.getOnce('/movies', mockResponse);

    const expectedActions = [
      { type: actionTypes.FETCHING_DATA },
      { type: actionTypes.FETCHING_DATA_SUCCESS, movies: mockData },
    ];

    const mockedStore = mockStore(store);

    return mockedStore.dispatch<any>(fetchMovies()).then(() => {
      // return of async actions
      expect(mockedStore.getActions()).toEqual(expectedActions);
    });
  });
});
