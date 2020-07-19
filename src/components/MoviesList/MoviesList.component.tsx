import React, { FC, ReactElement } from 'react';
import { MovieInfo } from 'entities';
import { MovieCard } from 'components/MovieCard';
import { GridContainer, ContentWrapper } from 'components/Common';
import MoviesListWrapper from './components/MoviesListWrapper';

interface MoviesListProps {
  movieData: MovieInfo[] | null;
}

const MoviesList: FC<MoviesListProps> = ({ movieData }: MoviesListProps): ReactElement => (
  <MoviesListWrapper>
    <ContentWrapper>
      <GridContainer columns="3" columnWidth="1fr" gridGap="4rem 3rem">
        {movieData && movieData.map(({
          id, poster_path, title, release_date, genres,
        }: MovieInfo) => (
          <MovieCard
            key={id}
            title={title}
            releaseDate={release_date}
            genres={genres}
            posterUrl={poster_path}
          />
        ))}
      </GridContainer>
    </ContentWrapper>
  </MoviesListWrapper>
);

export default MoviesList;
