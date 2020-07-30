import React, { ReactElement } from 'react';
import { ContentWrapper, FlexContainer, MoviePoster } from 'components/Common';
import { MovieInfo } from 'entities';
import {
  MovieDetailsWrapper,
  MovieDetailsPosterContainer,
  MovieDetailsTitle,
  MovieDetailsRating,
  MovieDetailsGenre,
  MovieDetailsYearDuration,
  MovieDetailsDescription,
} from './components';
import MovieDetailsDescriptionWrapper from './components/MovieDetailsDescriptionWrapper.component';

interface MovieDetailsProps {
  movieInfo: MovieInfo
}

const MovieDetails = ({
  movieInfo: {
    title,
    release_date,
    genres,
    poster_path,
    vote_average,
    runtime,
    overview,
  },
}: MovieDetailsProps): ReactElement => {
  const year = new Date(release_date).getFullYear();
  const duration = runtime || 0;
  const genre = genres[0] || '';

  return (
    <MovieDetailsWrapper>
      <ContentWrapper>
        <FlexContainer justifyContent="space-between">
          <MovieDetailsPosterContainer>
            <MoviePoster posterUrl={poster_path} />
          </MovieDetailsPosterContainer>
          <MovieDetailsDescriptionWrapper>
            <FlexContainer justifyContent="space-between">
              <MovieDetailsTitle>{title}</MovieDetailsTitle>
              <MovieDetailsRating>{vote_average}</MovieDetailsRating>
            </FlexContainer>
            <MovieDetailsGenre>{genre}</MovieDetailsGenre>
            <FlexContainer width="15rem" justifyContent="space-between" marginBottom="2rem">
              <MovieDetailsYearDuration num={year} units="year" />
              <MovieDetailsYearDuration num={duration} units="min" />
            </FlexContainer>
            <MovieDetailsDescription>{overview}</MovieDetailsDescription>
          </MovieDetailsDescriptionWrapper>
        </FlexContainer>
      </ContentWrapper>
    </MovieDetailsWrapper>
  );
};

export default MovieDetails;
