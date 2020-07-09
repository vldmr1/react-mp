import getMovieURL from 'utils';

describe('Utils', () => {
  it('should return URL with specified query params', () => {
    const params = {
      searchBy: 'title',
      sortBy: 'release date',
      searchQuery: 'Godzilla',
    };

    const expectedOutput = 'https://reactjs-cdp.herokuapp.com/movies?sortBy=release_date&sortOrder=asc&search=Godzilla&searchBy=title&limit=9';
    expect(getMovieURL(params)).toEqual(expectedOutput);
  });
});
