const MovieModel = require('../models/movies')

const getMovies = async (req, res) => {
  try {
    //Get Data from DB
    const movieData = await MovieModel.find({})
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

module.exports = {
  getMovieById, getMovies, addMovie, updateMovie, deleteMovie
}