const express = require('express')
const router = express.Router()
const { getMovies, getMovieById, addMovie, updateMovie, deleteMovie, addReview } = require('../controllers/movies')

router.get('/', getMovies);
router.get('/:movieId', getMovieById);
router.post('/', addMovie);
router.put('/:movieId', updateMovie);
router.delete('/:movieId', deleteMovie);

router.post('/:movieId/reviews', addReview)
module.exports = router
