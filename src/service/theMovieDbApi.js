import axios from 'axios';

const successToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOGRiMmQ2NWFmZjlkYWQ2Nzg0ZWUxM2M2NjFiNDE4NyIsInN1YiI6IjY2Mzc4MmFhMzVkMWJjMDEyNjBhYTc2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TrLGzVlqtjUvX3omt7Uq6H7ifhWLUnT_jgp0DIQhbeY'

const baseUrl = 'https://api.themoviedb.org/3';

export const fecthTrendingMovies = async () => {
  const {
    data: { results },
  } = await axios(`${baseUrl}/trending/movie/day`, {
    headers: { Authorization: `Bearer ${successToken}` },
  });
  return results;
};
export const fetchMovieDetailsById = async id => {
  const { data } = await axios(`${baseUrl}/movie/${id}`, {
    headers: { Authorization: `Bearer ${successToken}` },
  });
  return data;
};

export const fetchCreditsByMovieId = async id => {
  const { data } = await axios(`${baseUrl}/movie/${id}/credits`, {
    headers: { Authorization: `Bearer ${successToken}` },
  });
  return data.cast;
};
export const fetchReviewsByMovieId = async id => {
  const { data } = await axios(`${baseUrl}/movie/${id}/reviews`, {
    headers: { Authorization: `Bearer ${successToken}` },
  });
  return data.results;
};
export const fetchMoviesByQuery = async query => {
  const { data } = await axios(`${baseUrl}/search/movie?query=${query}`, {
    headers: { Authorization: `Bearer ${successToken}` },
  });
  return data.results;
};