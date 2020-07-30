import React, { ReactElement, useEffect } from 'react';
import { Header } from 'components/Header';
import { MovieSearch } from 'components/MovieSearch';
import { ControlBar } from 'components/ControlBar';
import { MoviesList } from 'components/MoviesList';
import { MovieSearchFormData, RootState, FetchParams } from 'entities';
import { connect } from 'react-redux';
import {
  updateSorting, updateSearchBy, updateSearchQuery, fetchMovies, updateCurrentMovie,
} from 'store/actions';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { useHistory, RouteComponentProps } from 'react-router-dom';

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
  updateCurrMovie: (movieId: number) => dispatch(updateCurrentMovie(movieId)),
  fetchMovieData: (fetchParams: FetchParams) => dispatch(fetchMovies(fetchParams)),
});

type SearchPageProps =
  ReturnType<typeof mapStateToProps>
  & ReturnType<typeof mapDispatchToProps>
  & RouteComponentProps;

const SearchPage = ({
  movieData,
  sortBy,
  searchBy,
  searchQuery,
  setSorting,
  setSearchBy,
  setSearchQuery,
  updateCurrMovie,
  fetchMovieData,
  location,
}: SearchPageProps): ReactElement => {
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q');
    if (query) {
      fetchMovieData({ searchQuery: query, searchBy, sortBy });
    }
  }, []);
  const history = useHistory();

  const searchFormHandler = (formData: MovieSearchFormData) => {
    const { query, searchBy: criteria } = formData;
    setSearchBy(criteria);
    setSearchQuery(query);
    fetchMovieData({ searchQuery: query, searchBy: criteria, sortBy });
    history.push(`search?q=${query}`);
  };

  const sortChangeHandler = (sorting: string) => {
    setSorting(sorting);
    fetchMovieData({ searchQuery, searchBy, sortBy });
  };

  return (
    <>
      <Header />
      <MovieSearch searchBy={searchBy} searchFormHandler={searchFormHandler} />
      <ControlBar sortBy={sortBy} sortChangeHandler={sortChangeHandler} />
      <MoviesList handleMovieUpdate={updateCurrMovie} movieData={movieData} />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
