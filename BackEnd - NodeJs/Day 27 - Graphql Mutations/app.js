const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql')
const dotenv = require('dotenv')
dotenv.config()
const app = express()

app.use(express.static('public'))
app.use(express.static('client'))

//connecting to DB
const { initMongoDB } = require('./db')
initMongoDB()
const MovieModel = require('./models/movies')
const movieDB = [
  {
    name: 'XYZ',
    noOfLikes: 500,
    language: 'English',
    cast: ['John', 'Joe'],
    reviews: [
      {
        text: "Good",
        likes: 30
      },
      {
        text: 'Ok',
        likes: 5
      }
    ]
  },
  {
    name: 'ABC',
    noOfLikes: 1000,
    language: 'Hindi',
    cast: ['Ram', 'Sheela']
  }
]

const schema = buildSchema(`

  type Reviews {
    text: String,
    likes: Int
  }

  type Theatres {
    name: String,
    noOfSeats: Int
  }

  type Query {
    movies : [Movie],
    theatres: [Theatres],
    getMovieById(movieId: ID) : Movie
  }

  type Movie {
    name: String,
    movieLanguage: String,
    noOfLikes: Int
  }

  type Mutation {
    addMovies(name: String!, language: String, cast: [String]) : Movie,
    updateMovie(movieID: ID!, movieData: Movie) : Movie
  }
`)

const resolvers = {
  movies: async () => {
    console.log("Inside Movies Resolver")
    try {
      //Get Data from DB
      const movieData = await MovieModel.find({})
      console.log(movieData)
      return movieData
    } catch (err) {
      return null
    }
  },
  addMovies: ({ name, language, cast }) => {
    const length = movieDB.push({ name, language, cast })
    return movieDB[length - 1]
  },
  updateMovie: async ({ movieID, movieData }) => {
    console.log(movieID)
    const result = await MovieModel.findByIdAndUpdate(movieID, movieData)
    return result
  }
}

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}))

app.listen(3000, () => {
  console.log("Server started in port 3000")
})