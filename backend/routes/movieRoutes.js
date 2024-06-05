const express = require('express');
const {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  filterMovies,
} = require('../controllers/movieController');

const router = express.Router();

router.route('/').get(getMovies).post(createMovie);
router.route('/:id').put(updateMovie).delete(deleteMovie);
router.route('/filter').get(filterMovies);

module.exports = router;
