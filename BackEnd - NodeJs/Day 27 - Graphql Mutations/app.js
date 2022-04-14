const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql')
const app = express()

app.use(express.static('public'))
app.use(express.static('client'))

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

  type Movie {
    name: String,
    language: String,
    noOfLikes: Int,
    duration: Float,
    cast: [String],
    reviews: [Reviews]
  }

  type Query {
    movies : [Movie]
  }

  type Mutation {
    addMovies(name: String!, language: String, cast: [String]) : Movie
  }
`)

const resolvers = {
  movies: () => {
    return movieDB
  },
  addMovies: ({ name, language, cast }) => {
    const length = movieDB.push({ name, language, cast })
    return movieDB[length - 1]
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