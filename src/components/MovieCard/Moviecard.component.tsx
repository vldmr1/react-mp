import React, { ReactElement, FC, useState } from 'react';
import 'assets/img/img-placeholder-vertical.jpg';
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
  const [imgUrl, setImgUrl] = useState(posterUrl);
  const year = new Date(releaseDate).getFullYear();
  const displayedGenres = genres.slice(0, 2).join(', ');

  return (
    <MovieCardWrapper>
      <MovieCardImage src={imgUrl} onError={() => setImgUrl('src/assets/img/img-placeholder-vertical.jpg')} />
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
