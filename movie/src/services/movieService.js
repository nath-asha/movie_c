import axios from 'axios';

const API_URL = 'http://localhost:5000/movies';

export const getMovies = (filter) => {
    return axios.get(API_URL, { params: filter });
};

export const createMovie = (movie) => {
    return axios.post(API_URL, movie);
};

export const updateMovie = (id, movie) => {
    return axios.put(`${API_URL}/${id}`, movie);
};

export const deleteMovie = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};

export const getMovieById = (id) => {
    return axios.get(`${API_URL}/${id}`);
};
