import React from 'react';
import { Toggle, ContentWrapper } from 'components/Common';
import { ToggleLabel, ToggleTitle } from 'enums';
import {
  SearchWrapper, SearchHeading, SearchForm, SearchBar, SearchButton,
} from './components';

const MovieSearch: React.FC = () => (
  <SearchWrapper>
    <ContentWrapper>
      <SearchHeading>
        FIND YOUR MOVIE
      </SearchHeading>
      <SearchForm>
        <SearchBar placeholder="Search" />
        <SearchButton>SEARCH</SearchButton>
      </SearchForm>
      <Toggle
        leftLabel={ToggleLabel.Title}
        rightLabel={ToggleLabel.Genre}
        title={ToggleTitle.SearchBy}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        toggleHandler={():void => {}}
        selected="title"
      />
    </ContentWrapper>
  </SearchWrapper>
);

export default MovieSearch;
