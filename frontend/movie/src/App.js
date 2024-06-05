import React, { useState, useEffect } from 'react';
import { getMovies, createMovie, updateMovie, deleteMovie } from './services/movieService';

function App() {
    const [movies, setMovies] = useState([]);
    const [filter, setFilter] = useState('');
    const [newMovie, setNewMovie] = useState({ title: '', director: '', genre: '', year: '' });

    useEffect(() => {
        fetchMovies();
    }, [filter]);

    const fetchMovies = async () => {
        const { data } = await getMovies({ genre: filter });
        setMovies(data);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMovie({ ...newMovie, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newMovie._id) {
            await updateMovie(newMovie._id, newMovie);
        } else {
            await createMovie(newMovie);
        }
        setNewMovie({ title: '', director: '', genre: '', year: '' });
        fetchMovies();
    };

    const handleEdit = (movie) => {
        setNewMovie(movie);
    };

    const handleDelete = async (id) => {
        await deleteMovie(id);
        fetchMovies();
    };

    return (
        <div>
            <h1>Movie Catalogue</h1>
            <input 
                type="text" 
                placeholder="Filter by genre" 
                value={filter} 
                onChange={(e) => setFilter(e.target.value)} 
            />
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    value={newMovie.title} 
                    onChange={handleInputChange} 
                />
                <input 
                    type="text" 
                    name="director" 
                    placeholder="Director" 
                    value={newMovie.director} 
                    onChange={handleInputChange} 
                />
                <input 
                    type="text" 
                    name="genre" 
                    placeholder="Genre" 
                    value={newMovie.genre} 
                    onChange={handleInputChange} 
                />
                <input 
                    type="number" 
                    name="year" 
                    placeholder="Year" 
                    value={newMovie.year} 
                    onChange={handleInputChange} 
                />
                <button type="submit">Save</button>
            </form>
            <ul>
                {movies.map((movie) => (
                    <li key={movie._id}>
                        {movie.title} - {movie.director} ({movie.genre}, {movie.year})
                        <button onClick={() => handleEdit(movie)}>Edit</button>
                        <button onClick={() => handleDelete(movie._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
