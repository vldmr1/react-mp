import React, { FC, ReactElement } from 'react';
import { Header } from 'components/Header';
import { MovieSearch } from 'components/MovieSearch';
import { ControlBar } from 'components/ControlBar';
import { MoviesList } from 'components/MoviesList';
import { MovieInfo } from 'entities';

interface SearchPageProps {
  movieData: MovieInfo[];
}

const SearchPage: FC<SearchPageProps> = ({ movieData }: SearchPageProps): ReactElement => (
  <>
    <Header />
    <MovieSearch />
    <ControlBar />
    <MoviesList movieData={movieData} />
  </>
);

export default SearchPage;
