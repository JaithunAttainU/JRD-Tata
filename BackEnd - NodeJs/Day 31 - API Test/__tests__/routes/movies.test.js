const { dbTestConnect, disconnectDB } = require('../../utils/dbtest')
const { MovieModel } = require('../../models/movies')
const supertest = require('supertest')
const { app } = require('../../app')
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

beforeAll(async () => {
  await dbTestConnect()
  await MovieModel.insertMany(movieDB)
})
// beforeEach(() => {
//   console.log("Complted Before Each")
// })

afterAll(async () => {
  await disconnectDB()
  console.log("Closed Connection")
})

describe("Movie Routes", () => {
  describe("Given a GET Request to /movies", () => {
    test("Should Return 200", async () => {
      await supertest(app).get('/movies').expect(200)
    })

    test("Should return an array of movies", async () => {
      await supertest(app).get('/movies').expect((response) => {
        expect(Array.isArray(response.body)).toBeTruthy()
        expect(response.body).toHaveLength(2)
      })
    })
  })

  describe("Given a POST call to /movies", () => {
    test("Should return 201 status", async () => {
      await supertest(app).post('/movies').send({
        name: 'sdfgdh',
        noOfLikes: 1000,
        language: 'Hindi',
        cast: ['Ram', 'Sheela']
      }).expect(201)
    })
  })

  test("Should return an array of movies", async () => {
    await supertest(app).get('/movies').expect((response) => {
      expect(Array.isArray(response.body)).toBeTruthy()
      expect(response.body).toHaveLength(3)
    })
  })
  // describe("Given a DELETE call to /movies", () => {
  //   test("Should return 201 status", () => {
  //     expect(true).toBe(true)
  //   })
  // })

})

