const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/movieCatalogue', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const movieSchema = new mongoose.Schema({
    title: String,
    director: String,
    genre: String,
    year: Number,
});

const Movie = mongoose.model('Movie', movieSchema);

// CRUD routes
app.post('/movies', async (req, res) => {
    const movie = new Movie(req.body);
    await movie.save();
    res.send(movie);
});

app.get('/movies', async (req, res) => {
    const { genre } = req.query;
    const filter = genre ? { genre } : {};
    const movies = await Movie.find(filter);
    res.send(movies);
});

app.get('/movies/:id', async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    res.send(movie);
});

app.put('/movies/:id', async (req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(movie);
});

app.delete('/movies/:id', async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.send({ message: 'Movie deleted' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// const express = require('express');
// const app = express();

// app.get('/',(req,res)=>{
//     res.send('Hello');
// });
// app.listen(3000, ()=> {
//     console.log('Server listening on port 3000');
// });
