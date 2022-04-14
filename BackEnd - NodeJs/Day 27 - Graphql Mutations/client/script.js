console.log("AttainU")

const addMovie = async () => {
  const movieName = document.getElementById("name").value
  const language = document.getElementById("language").value
  const duration = document.getElementById("duration").value

  const movieData = `
    mutation {
      addMovies(name: "${movieName}", language: "${language}") {
        name,
        language
      }
    }
  `
  const response = await fetch('/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: movieData
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const data = await response.json()
  console.log(data)
}


const getMovies = async () => {

  const query = `
    query {
      movies {
        name,
        language
      }
    }
  `
  const response = await fetch('/graphql', {
    method: "POST",
    body: JSON.stringify({
      query
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })

  const data = await response.json()
  console.log("🚀 ~ file: script.js ~ line 44 ~ getMovies ~ data", data)

}