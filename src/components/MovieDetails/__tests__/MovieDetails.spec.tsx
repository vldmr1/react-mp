import React from 'react';
import { theme } from 'theme';
import { shallowWithTheme } from 'enzyme.setup';
import { MovieDetails } from 'components/MovieDetails';
import mockData from 'mocks/movies';

describe('MovieDetails component', () => {
  it('should render correctly', () => {
    const detailsMock = mockData[0];
    const movieDetails = shallowWithTheme(<MovieDetails movieInfo={detailsMock} />, theme);
    expect(movieDetails).toMatchSnapshot();
  });
});
