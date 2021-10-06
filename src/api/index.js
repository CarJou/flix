import axios from 'axios';

const apiKey = process.env.TMDB_API_KEY;
console.log(apiKey);
const url = 'https://api.themoviedb.org/3';
const nowPlaying = `${url}/movie/now_playing`;
const popularUrl = `${url}/movie/popular`;
