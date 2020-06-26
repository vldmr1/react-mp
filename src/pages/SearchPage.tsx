import React, { ReactElement } from 'react';
import { Header } from 'components/Header';
import { MovieSearch } from 'components/MovieSearch';
import { ControlBar } from 'components/ControlBar';
import { MoviesList } from 'components/MoviesList';
import { MovieInfo, MovieSearchFormData } from 'entities';

interface SearchPageProps {
  movieData: MovieInfo[];
  sortBy: string;
  searchFormHandler: (formData: MovieSearchFormData) => void;
  sortChangeHandler: (sortBy: string) => void;
}

const SearchPage = ({
  movieData, searchFormHandler, sortBy, sortChangeHandler,
}: SearchPageProps): ReactElement => (
  <>
    <Header />
    <MovieSearch searchFormHandler={searchFormHandler} />
    <ControlBar sortBy={sortBy} sortChangeHandler={sortChangeHandler} />
    <MoviesList movieData={movieData} />
  </>
);

export default SearchPage;
