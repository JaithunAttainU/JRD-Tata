const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  // userId: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'users'
  // }

})

const ReviewModel = mongoose.model('Review', reviewSchema)

module.exports = ReviewModel