import React, { ReactElement } from 'react';
import { Header } from 'components/Header';
import { MovieDetails } from 'components/MovieDetails';
import { ControlBar } from 'components/ControlBar';
import { MoviesList } from 'components/MoviesList';
import { MovieInfo } from 'entities';

interface MoviePageProps {
  movieData: MovieInfo[];
}

const MoviePage = ({ movieData }: MoviePageProps): ReactElement => (
  <>
    <Header />
    <MovieDetails movieInfo={movieData[0]} />
    <ControlBar />
    <MoviesList movieData={movieData} />
  </>
);

export default MoviePage;
