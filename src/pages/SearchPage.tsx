import React, { ReactElement } from 'react';
import { Header } from 'components/Header';
import { MovieSearch } from 'components/MovieSearch';
import { ControlBar } from 'components/ControlBar';
import { MoviesList } from 'components/MoviesList';
import { MovieSearchFormData, RootState } from 'entities';
import { connect } from 'react-redux';
import {
  updateSorting, updateSearchBy, updateSearchQuery, fetchMovies,
} from 'store/actions';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

const mapStateToProps = ({ app, data }: RootState) => ({
  movieData: data.movies,
  searchBy: app.searchBy,
  sortBy: app.sortBy,
  searchQuery: app.searchQuery,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, Action>) => ({
  setSorting: (sortBy: string) => dispatch(updateSorting(sortBy)),
  setSearchBy: (searchBy: string) => dispatch(updateSearchBy(searchBy)),
  setSearchQuery: (searchQuery: string) => dispatch(updateSearchQuery(searchQuery)),
  fetchMovieData: () => dispatch(fetchMovies()),
});

type SearchPageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const SearchPage = ({
  movieData, sortBy, searchBy, setSorting, setSearchBy, setSearchQuery, fetchMovieData,
}: SearchPageProps): ReactElement => {
  const searchFormHandler = (formData: MovieSearchFormData) => {
    const { query, searchBy: criteria } = formData;
    setSearchBy(criteria);
    setSearchQuery(query);
    fetchMovieData();
  };

  const sortChangeHandler = (sorting: string) => {
    setSorting(sorting);
    fetchMovieData();
  };

  return (
    <>
      <Header />
      <MovieSearch searchBy={searchBy} searchFormHandler={searchFormHandler} />
      <ControlBar sortBy={sortBy} sortChangeHandler={sortChangeHandler} />
      <MoviesList movieData={movieData} />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
