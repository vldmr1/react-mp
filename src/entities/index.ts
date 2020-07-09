export interface MovieInfo {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: string[];
  runtime: null | number;
}

export interface MovieSearchFormData {
  query: string;
  searchBy: string;
}

export interface AppState {
  sortBy: string;
  searchBy: string;
  searchQuery: string;
}

export interface DataState {
  movies: MovieInfo[] | null;
  isFetching: boolean;
  error: string | null;
}

export interface RootState {
  data: DataState;
  app: AppState;
}

export interface AppComponent {
  fetchMovieData: () => void;
}
