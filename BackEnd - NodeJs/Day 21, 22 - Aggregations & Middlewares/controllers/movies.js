const MovieModel = require('../models/movies')
const ReviewModel = require('../models/reviews')

const getMovies = async (req, res) => {
  try {
    //Get Data from DB
    // const movieData = await MovieModel.find({ year: 2015 }).skip(3).limit(2)

    const movieData = await MovieModel.aggregate([
      {
      $match: {
        year: 2010,
          "awards.wins": { $gt: 4 },
          "imdb.rating": { $gt: 8.5 }
        }
      },
      {
        $lookup: {
          from: 'comments',
          localField: "_id",
          foreignField: "movie_id",
          as: "movie"
        }
      },
      {
        $project: {
          title: true,
          year: 1,
          imdb: 1,
          "movie.text": 1,
          "movie.name": 1,
          cast: 1
        }
      },
      {
        $sort: {
          title: -1
        }
      },
      {
        $limit: 2
      },
      {
        $unwind: "$cast"
      },
    ])
    res.send(movieData)
  } catch (err) {
    res.status(500).json({
      errObj: err
    })
  }
}
const getMovieById = async (req, res) => {
  const { movieId } = req.params
  try {
    //Get Data by Id from DB
    const movieData = await MovieModel.findById(movieId)

    if (!movieData) {
      return res.status(404).send({
        message: "Movie Not found"
      })
    }
    res.send(movieData)
  } catch (err) {
    res.status(500).json({
      errObj: err
    })
  }

}
const addMovie = async (req, res) => {
  const movieData = req.body
  console.log(movieData)

  try {
    //Add to my db
    const addResult = await MovieModel.create(movieData)
    res.send(addResult)
  } catch (err) {
    res.status(500).json({
      errObj: err
    })
  }

}
const updateMovie = async (req, res) => {
  const updateMovieData = req.body
  const { movieId } = req.params

  try {
    //Update to my db
    const updateResult = await MovieModel.findByIdAndUpdate(movieId, updateMovieData)
    res.send(updateResult)
  } catch (err) {
    res.status(500).json({
      errObj: err
    })
  }
}
const deleteMovie = async (req, res) => {
  const { movieId } = req.params
  try {
    //Delete to my db
    const updateResult = await MovieModel.findByIdAndDelete(movieId)
    res.send(updateResult)
  } catch (err) {
    res.status(500).json({
      errObj: err
    })
  }
}

const addReview = async (req, res) => {
  const reviewData = req.body
  const { movieId } = req.params
  try {
    // //Update to my db
    // const addReview = await MovieModel.findByIdAndUpdate(movieId, { $push: { reviews: reviewComment } })
    // res.send(addReview)

    //Add to my Review Collection
    const addReviewResult = await ReviewModel.create(reviewData)

    //Update Review ID to Movie Model
    const addReviewIdResult = await MovieModel.findByIdAndUpdate(movieId, { $push: { reviews: addReviewResult._id } })
    res.send(addReviewIdResult)

  } catch (err) {
    res.status(500).json({
      errObj: err
    })
  }
}

module.exports = {
  getMovieById, getMovies, addMovie, updateMovie, deleteMovie, addReview
}