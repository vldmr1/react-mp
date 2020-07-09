const store = {
  app: {
    sortBy: 'release date',
    searchBy: 'title',
    searchQuery: '',
  },
  data: {
    isFetching: false,
    movies: null,
    error: null,
  },
};

export default store;
