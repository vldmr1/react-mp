import { SearchParamsMap } from 'enums';

interface SearchParams {
  sortBy: string;
  searchBy: string;
  searchQuery: string;
}

const getMovieURL = ({ sortBy, searchQuery, searchBy }: SearchParams): string => {
  const sort = SearchParamsMap[sortBy as keyof typeof SearchParamsMap] || sortBy;
  return `https://reactjs-cdp.herokuapp.com/movies?sortBy=${sort}&sortOrder=asc&search=${searchQuery}&searchBy=${searchBy}&limit=9`;
};

export default getMovieURL;
