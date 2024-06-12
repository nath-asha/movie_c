const Movie = require('../models/Movie');

exports.createMovie = async (req, res) => {
    const { title, genre, releaseYear } = req.body;
    try {
        const newMovie = new Movie({ title, genre, releaseYear });
        const movie = await newMovie.save();
        res.json(movie);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateMovie = async (req, res) => {
    const { id } = req.params;
    const { title, genre, releaseYear } = req.body;
    try {
        const movie = await Movie.findByIdAndUpdate(id, { title, genre, releaseYear }, { new: true });
        res.json(movie);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.deleteMovie = async (req, res) => {
    const { id } = req.params;
    try {
        await Movie.findByIdAndRemove(id);
        res.json({ msg: 'Movie removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
