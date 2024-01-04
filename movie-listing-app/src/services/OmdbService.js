// src/services/OmdbService.js

const API_KEY = '206d3762'; // OMDb API anahtarınızı buraya girin

export const fetchMovies = async (searchQuery) => {
  const response = await fetch(`https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.Search;
};