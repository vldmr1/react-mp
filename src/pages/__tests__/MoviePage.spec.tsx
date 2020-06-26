import React from 'react';
import { theme } from 'theme';
import { shallowWithTheme } from 'enzyme.setup';
import MoviePage from 'pages/MoviePage';
import mockData from 'mocks/movies';

describe('Movie page', () => {
  it('should render correctly', () => {
    const moviePage = shallowWithTheme(<MoviePage movieData={mockData} />, theme);
    expect(moviePage).toMatchSnapshot();
  });
});
