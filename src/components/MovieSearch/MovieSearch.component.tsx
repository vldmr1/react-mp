import React, {
  SyntheticEvent, useState, ReactElement, useRef, useEffect,
} from 'react';
import { Toggle, ContentWrapper, FlexContainer } from 'components/Common';
import { ToggleLabel, ToggleTitle, ToggleName } from 'enums';
import { MovieSearchFormData } from 'entities';
import {
  SearchWrapper, SearchHeading, SearchForm, SearchBar, SearchButton,
} from './components';

interface MovieSearchProps {
  searchBy: string;
  searchFormHandler: (formData: MovieSearchFormData) => void;
}

const MovieSearch = (
  { searchFormHandler, searchBy: _searchBy }: MovieSearchProps,
): ReactElement => {
  const [searchBy, setSearchBy] = useState<string>(_searchBy);
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    searchInput.current?.focus();
  }, []);

  const onSearchSubmitHandler = (event: SyntheticEvent): void => {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const searchRequest = {
      query: data.get('search') as string,
      searchBy: data.get('searchBy') as string,
    };
    searchFormHandler(searchRequest);
  };

  return (
    <SearchWrapper>
      <ContentWrapper>
        <SearchHeading>
          FIND YOUR MOVIE
        </SearchHeading>
        <SearchForm onSubmit={onSearchSubmitHandler}>
          <FlexContainer justifyContent="space-between" marginBottom="2.1rem">
            <SearchBar className="search-form__input" ref={searchInput} name="search" placeholder="Search" />
            <SearchButton type="submit" className="search-form__submit">SEARCH</SearchButton>
          </FlexContainer>
          <Toggle
            inputName={ToggleName.SearchBy}
            leftLabel={ToggleLabel.Title}
            rightLabel={ToggleLabel.Genre}
            title={ToggleTitle.SearchBy}
            toggleHandler={setSearchBy}
            selected={searchBy}
          />
        </SearchForm>
      </ContentWrapper>
    </SearchWrapper>
  );
};

export default MovieSearch;
