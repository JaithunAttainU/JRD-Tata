const express = require('express');
const { buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql')
const app = express()

//1 Defining Schema
const movieSchema = buildSchema(`
  type Query{
    name: String,
    language: String,
    noOfLikes: Int,
    duration: Float,
    cast: [String],
    addNumbers(num1 : Int, num2: Int!): Int
  }
`)

//2. Create Resolvers
const resolvers = {
  name: () => {
    //fetch the value from DB
    return "Beast"
  },
  addNumbers: (args) => {
    console.log(args)
    if (args.num1) {
      return args.num1 + args.num2
    } else {
      return args.num2
    }
  },
  language: () => {
    return "Tamil"
  },
  noOfLikes: () => {
    return 1000000
  },
  duration: () => {
    return 2.50
  },
  cast: () => {
    return ["Vijay", "Pooja"]
  }
}

app.use('/graphql', graphqlHTTP({
  schema: movieSchema,
  rootValue: resolvers,
  graphiql: true
}))

app.get('/', (req, res) => {
  res.send("Hello")
})

// app.post('/movies', (req, res) => {

// })

app.listen(3000, () => {
  console.log("Server started in port 3000")
})