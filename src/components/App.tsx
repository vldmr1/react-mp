import React, { ReactElement, PureComponent } from 'react';
import { MainWrapper } from 'components/Common';
import { Footer } from 'components/Footer';
import { RootState, AppComponent } from 'entities';
import { SearchPage /* MoviePage */ } from 'pages';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { fetchMovies } from 'store/actions';

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, void, Action>) => ({
  fetchMovieData: () => dispatch(fetchMovies()),
});

type AppProps = ReturnType<typeof mapDispatchToProps>;

class App extends PureComponent<AppProps, AppComponent> {
  componentDidMount() {
    const { fetchMovieData } = this.props;
    fetchMovieData();
  }

  render(): ReactElement {
    return (
      <MainWrapper>
        {/* TODO: implement router */}
        <SearchPage />
        {/* <MoviePage movieData={data} /> */}
        <Footer />
      </MainWrapper>
    );
  }
}

export default connect(null, mapDispatchToProps)(App);
