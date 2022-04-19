const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  noOfLikes: {
    type: Number
  },
  movieLanguage: {
    type: String
  }
})

const MovieModel = mongoose.model('Movie', movieSchema)

module.exports = MovieModel
