import React, { FC, ReactElement } from 'react';
import { MovieInfo } from 'entities';
import { MovieCard } from 'components/MovieCard';
import { GridContainer, ContentWrapper } from 'components/Common';
import MoviesListWrapper from './components/MoviesListWrapper.component';
import EmptyResult from './components/EmptyResult.component';

interface MoviesListProps {
  movieData: MovieInfo[] | null;
  handleMovieUpdate: (movieId: number) => void;
}

const MoviesList: FC<MoviesListProps> = ({
  movieData, handleMovieUpdate,
}: MoviesListProps): ReactElement => {
  const result = movieData
    ? (
      <GridContainer columns="3" columnWidth="1fr" gridGap="4rem 3rem">
        {movieData.map(({
          id, poster_path, title, release_date, genres,
        }: MovieInfo) => (
          <MovieCard
            key={id}
            id={id}
            title={title}
            releaseDate={release_date}
            genres={genres}
            posterUrl={poster_path}
            handleMovieUpdate={handleMovieUpdate}
          />
        ))}
      </GridContainer>
    )
    : <EmptyResult>No films found</EmptyResult>;

  return (
    <MoviesListWrapper>
      <ContentWrapper>
        {result}
      </ContentWrapper>
    </MoviesListWrapper>
  );
};

export default MoviesList;
