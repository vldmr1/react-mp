import React from 'react';
import { theme } from 'theme';
import { shallowWithTheme } from 'enzyme.setup';
import { MovieCard } from 'components/MovieCard';
import mockData from 'mocks/movies';

describe('MovieCard component', () => {
  it('should render correctly', () => {
    const cardMock = mockData[0];
    const {
      title, release_date: releaseDate, genres, poster_path: posterUrl,
    } = cardMock;
    const movieCard = shallowWithTheme(
      <MovieCard
        title={title}
        releaseDate={releaseDate}
        genres={genres}
        posterUrl={posterUrl}
      />, theme,
    );
    expect(movieCard).toMatchSnapshot();
  });
});
