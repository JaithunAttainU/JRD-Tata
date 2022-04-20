const express = require('express');
const { MovieModel } = require('./models/movies')
const app = express();
app.use(express.json())


app.get('/movies', async (req, res) => {

  res.status(200).json(await MovieModel.find({}))
});

app.post('/movies', async (req, res) => {
  const data = req.body

  const result = await MovieModel.create(data)
  res.status(201).send(result)
});

app.delete('/movies/:movieId', (req, res) => {

});

// app.listen(3000)

module.exports = { app }