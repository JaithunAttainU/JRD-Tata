const mongoose = require('mongoose')
const { Schema } = require('mongoose')

// const movieSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   releaseDate: {
//     type: Date,
//     required: true
//   },
//   genre: String,
//   cast: [String],
//   rating: {
//     type: Number,
//     default: 0
//   },
//   reviews: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'reviews'
//   }],
//   director: String
// })

const movieSchema = new mongoose.Schema({
  "title": Schema.Types.String,
  "year": Schema.Types.Number,
  "runtime": Schema.Types.Number,
  "released": Schema.Types.Date,
  "poster": Schema.Types.String,
  "plot": Schema.Types.String,
  "fullplot": Schema.Types.String,
  "lastupdated": Schema.Types.String,
  "type": Schema.Types.String,
  "directors": [Schema.Types.String],
  "imdb": {
    "rating": Schema.Types.Number,
    "votes": Schema.Types.Number,
    "id": Schema.Types.Number,
  },
  "cast": [Schema.Types.String],
  "countries": [Schema.Types.String],
  "genres": [Schema.Types.String],
  "tomatoes": {
    "viewer": {
      "rating": Schema.Types.Number,
      "numReviews": Schema.Types.Number
    },
    "lastUpdated": Schema.Types.Date
  },
  "num_mflix_comments": Schema.Types.Number
})

const MovieModel = mongoose.model('Movie', movieSchema)

module.exports = MovieModel
