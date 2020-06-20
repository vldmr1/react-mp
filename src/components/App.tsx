import React, { ReactElement } from 'react';
import { MainWrapper } from 'components/Common';
import { Footer } from 'components/Footer';
import { MovieInfo } from 'entities';
import { SearchPage /* MoviePage */ } from 'pages';
import mockData from 'mocks/movies';

interface State {
  data: MovieInfo[];
}

class App extends React.PureComponent {
  state: State = {
    data: mockData,
  };

  render(): ReactElement {
    const { data } = this.state;
    return (
      <MainWrapper>
        <SearchPage movieData={data} />
        {/* TODO: implement router */}
        {/* <MoviePage movieData=={this.state.data} /> */}
        <Footer />
      </MainWrapper>
    );
  }
}

export default App;
