import React from 'react';
import { theme } from 'theme';
import { mountWithTheme } from 'enzyme.setup';
import { MovieSearch } from 'components/MovieSearch';
import { ReactWrapper } from 'enzyme';

describe('MovieSearch component', () => {
  let movieSearch: ReactWrapper;
  const searchFormHandler = jest.fn();

  beforeAll(() => {
    movieSearch = mountWithTheme(<MovieSearch searchBy="title" searchFormHandler={searchFormHandler} />, theme);
  });

  it('should render correctly', () => {
    expect(movieSearch).toMatchSnapshot();
  });

  it('should call searchFormHandler on submit', () => {
    movieSearch.find('form').simulate('submit');
    expect(searchFormHandler).toHaveBeenCalled();
  });
});
