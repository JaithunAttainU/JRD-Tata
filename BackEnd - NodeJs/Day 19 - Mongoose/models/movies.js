const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  genre: String,
  cast: [String],
  rating: {
    type: Number,
    default: 0
  },
  director: String
})

const MovieModel = mongoose.model('Movie', movieSchema)

module.exports = MovieModel
