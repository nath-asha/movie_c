const Movie = require('../models/Movie');

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createMovie = async (req, res) => {
  const { title, genre, director, releaseDate } = req.body;
  const movie = new Movie({ title, genre, director, releaseDate });

  try {
    const createdMovie = await movie.save();
    res.status(201).json(createdMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { title, genre, director, releaseDate } = req.body;

  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      id,
      { title, genre, director, releaseDate },
      { new: true }
    );

    if (!updatedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.json(updatedMovie);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);

    if (!deletedMovie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.json({ message: 'Movie removed' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const filterMovies = async (req, res) => {
  const { genre, director } = req.query;

  try {
    const query = {};
    if (genre) query.genre = genre;
    if (director) query.director = director;

    const movies = await Movie.find(query);
    res.json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getMovies, createMovie, updateMovie, deleteMovie, filterMovies };
