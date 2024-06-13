import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        genre: '',
        releaseYear: ''
    });

    const { title, genre, releaseYear } = formData;

    useEffect(() => {
        const fetchMovies = async () => {
            const res = await axios.get('/api/movies');
            setMovies(res.data);
        };
        fetchMovies();
    }, []);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        const res = await axios.post('/api/movies', formData);
        setMovies([...movies, res.data]);
        setFormData({ title: '', genre: '', releaseYear: '' });
    };

    const onDelete = async id => {
        await axios.delete(`/api/movies/${id}`);
        setMovies(movies.filter(movie => movie._id !== id));
    };

    return (
        <div>
            <h1>Movies</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={title} onChange={onChange} required />
                </div>
                <div>
                    <label>Genre</label>
                    <input type="text" name="genre" value={genre} onChange={onChange} required />
                </div>
                <div>
                    <label>Release Year</label>
                    <input type="number" name="releaseYear" value={releaseYear} onChange={onChange} required />
                </div>
                <input type="submit" value="Add Movie" />
            </form>
            <ul>
                {movies.map(movie => (
                    <li key={movie._id}>
                        {movie.title} - {movie.genre} - {movie.releaseYear}{' '}
                        <button onClick={() => onDelete(movie._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;
