import React, { ReactElement, FC } from 'react';
import 'assets/img/img-placeholder-vertical.jpg';
import { FlexContainer, MoviePoster } from 'components/Common';
import { Link } from 'react-router-dom';
import {
  MovieCardWrapper,
  MovieCardPosterContainer,
  MovieCardCaptionWrapper,
  MovieCardTitle,
  MovieCardYear,
  MovieCardDescription,
} from './components';

interface MovieCardProps {
  id: number;
  title: string;
  releaseDate: string;
  genres: string[];
  posterUrl: string;
  handleMovieUpdate: (movieId: number) => void;
}

const MovieCard: FC<MovieCardProps> = (
  {
    id, title, releaseDate, genres, posterUrl, handleMovieUpdate,
  }: MovieCardProps,
): ReactElement => {
  // const [imgUrl, setImgUrl] = useState(posterUrl);
  const year = new Date(releaseDate).getFullYear();
  const displayedGenres = genres.slice(0, 2).join(', ');

  return (
    <MovieCardWrapper>
      <Link to={`/movie/${title}`}>
        <MovieCardPosterContainer
          onClick={() => handleMovieUpdate(id)}
        >
          <MoviePoster posterUrl={posterUrl} />
        </MovieCardPosterContainer>
      </Link>
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
