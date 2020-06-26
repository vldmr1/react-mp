import React, { ReactElement, PureComponent } from 'react';
import { MainWrapper } from 'components/Common';
import { Footer } from 'components/Footer';
import { MovieInfo, MovieSearchFormData } from 'entities';
import { SearchPage /* MoviePage */ } from 'pages';
import mockData from 'mocks/movies';
import { ToggleLabel } from 'enums';

interface AppComponentState {
  data: MovieInfo[];
  query: string;
  sortBy: string;
  searchBy: string;
}

class App extends PureComponent {
  state: AppComponentState = {
    data: mockData,
    query: '',
    sortBy: ToggleLabel.ReleaseDate,
    searchBy: ToggleLabel.Title,
  };

  handleSearchFormSubmit = (formData: MovieSearchFormData): void => {
    const { query, searchBy } = formData;
    this.setState((state) => ({ ...state, query, searchBy }));
  };

  handleSortChange = (sortBy: string): void => {
    this.setState((state) => ({ ...state, sortBy }));
  };

  render(): ReactElement {
    const { data, sortBy } = this.state;
    return (
      <MainWrapper>
        {/* TODO: implement router */}
        <SearchPage
          sortBy={sortBy}
          sortChangeHandler={this.handleSortChange}
          searchFormHandler={this.handleSearchFormSubmit}
          movieData={data}
        />
        {/* <MoviePage movieData={data} /> */}
        <Footer />
      </MainWrapper>
    );
  }
}

export default App;
