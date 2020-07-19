import React from 'react';
import { theme } from 'theme';
import { mountWithTheme } from 'enzyme.setup';
import { ReactWrapper } from 'enzyme';
import { Header } from 'components/Header';
import { MovieSearch } from 'components/MovieSearch';
import { ControlBar } from 'components/ControlBar';
import { MoviesList } from 'components/MoviesList';
import SearchPage from 'pages/SearchPage';
import { store } from 'mocks';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { createReducer } from 'store/helpers';

describe('SearchPage component', () => {
  let searchPage: ReactWrapper;
  // const handleSearchFormSubmit = jest.fn();
  // const handleSortChange = jest.fn();

  beforeAll(() => {
    const mockHandlers = {
      handler: jest.fn(),
    };
    const mockStore = createStore(createReducer(store, mockHandlers));

    searchPage = mountWithTheme(
      <Provider store={mockStore}>
        <SearchPage />
      </Provider>, theme,
    );
  });

  // it('should call search form handler on submit', () => {
  //   searchPage.find('form').simulate('submit');
  //   expect(handleSearchFormSubmit).toHaveBeenCalled();
  // });

  // it('should call sort change handler on sort type change', () => {
  //   searchPage.find('input[value="rating"]').simulate('change');
  //   expect(handleSortChange).toHaveBeenCalled();
  // });

  it('should contain Header', () => {
    const header = searchPage.find(Header);
    expect(header.exists()).toBe(true);
  });

  it('should contain MovieSearch component', () => {
    const movieSearch = searchPage.find(MovieSearch);
    expect(movieSearch.exists()).toBe(true);
  });

  it('should contain ControlBar component', () => {
    const controlBar = searchPage.find(ControlBar);
    expect(controlBar.exists()).toBe(true);
  });

  it('should contain MoviesList component', () => {
    const moviesList = searchPage.find(MoviesList);
    expect(moviesList.exists()).toBe(true);
  });
});
