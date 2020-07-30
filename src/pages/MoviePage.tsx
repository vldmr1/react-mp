import React, { ReactElement, useEffect } from 'react';
import { Header } from 'components/Header';
import { MovieDetails } from 'components/MovieDetails';
import { ControlBar } from 'components/ControlBar';
import { MoviesList } from 'components/MoviesList';
import { RootState, FetchParams } from 'entities';
import { connect } from 'react-redux';
import { updateCurrentMovie, fetchMovies } from 'store/actions';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

const mapStateToProps = ({ data }: RootState) => ({
  movieData: data.movies,
  currentMovie: data.currentMovie,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, Action>) => ({
  updateCurrMovie: (movieId: number) => dispatch(updateCurrentMovie(movieId)),
  fetchMovieData: (fetchParams: FetchParams) => dispatch(fetchMovies(fetchParams)),

});

type MoviePageProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const MoviePage = ({
  movieData, updateCurrMovie, currentMovie, fetchMovieData,
}: MoviePageProps): ReactElement => {
  if (!currentMovie) {
    throw new Error('Unable to display movie details');
  }
  const currentMovieGenre = currentMovie.genres[0];
  useEffect(() => {
    fetchMovieData({ searchQuery: currentMovieGenre, searchBy: 'genre', sortBy: 'release date' });
  }, []);

  return (
    <>
      <Header />
      <MovieDetails movieInfo={currentMovie} />
      <ControlBar currentMovieGenre={currentMovieGenre} />
      <MoviesList handleMovieUpdate={updateCurrMovie} movieData={movieData} />
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
