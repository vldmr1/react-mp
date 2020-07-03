import React from 'react';
import { theme } from 'theme';
import { mountWithTheme } from 'enzyme.setup';
import { MoviesList } from 'components/MoviesList';
import mockData from 'mocks/movies';

describe('MoviesList component', () => {
  it('should render correctly', () => {
    const moviesList = mountWithTheme(<MoviesList movieData={mockData} />, theme);
    expect(moviesList).toMatchSnapshot();
  });
});
