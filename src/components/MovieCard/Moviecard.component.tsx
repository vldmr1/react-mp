import React, { ReactElement, FC } from 'react';
import { FlexContainer } from 'components/Common';
import {
  MovieCardWrapper,
  MovieCardImage,
  MovieCardCaptionWrapper,
  MovieCardTitle,
  MovieCardYear,
  MovieCardDescription,
} from './components';

interface MovieCardProps {
  title: string;
  releaseDate: string;
  genres: string[];
  posterUrl: string;
}

const MovieCard: FC<MovieCardProps> = (
  {
    title, releaseDate, genres, posterUrl,
  }: MovieCardProps,
): ReactElement => {
  const year = new Date(releaseDate).getFullYear();
  const displayedGenres = genres.slice(0, 2).join(', ');

  return (
    <MovieCardWrapper>
      <MovieCardImage src={posterUrl} />
      <FlexContainer justifyContent="space-between">
        <MovieCardCaptionWrapper>
          <MovieCardTitle>{title}</MovieCardTitle>
          <MovieCardDescription>{displayedGenres}</MovieCardDescription>
        </MovieCardCaptionWrapper>
        <MovieCardYear>{year}</MovieCardYear>
      </FlexContainer>
    </MovieCardWrapper>
  );
};

export default MovieCard;
