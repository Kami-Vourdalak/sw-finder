import { mapFilm, mapGenericResponse } from './mapResponses'
import axios from 'axios'

export async function fetchSwFilm({ queryKey }) {
  const [, filmId] = queryKey

  const response = await axios.get(`https://swapi.dev/api/films/${filmId}`)
  return mapFilm(response?.data)
}

export async function fetchSwFilmsByQuery({ queryKey }) {
  const [, query] = queryKey
  const words = query.includes(' ')
    ? query.split(' ').filter(word => word !== '')
    : [query]

  const queries = []
  words.forEach(word => {
    queries.push(axios.get(`https://swapi.dev/api/people/?search=${word}`))
    queries.push(axios.get(`https://swapi.dev/api/planets/?search=${word}`))
    queries.push(axios.get(`https://swapi.dev/api/species/?search=${word}`))
    queries.push(axios.get(`https://swapi.dev/api/starships/?search=${word}`))
    queries.push(axios.get(`https://swapi.dev/api/vehicles/?search=${word}`))
    queries.push(axios.get(`https://swapi.dev/api/films/?search=${word}`))
  })

  const uniqueFilmIdList = await Promise.all(queries)
    .then(resList => {
      const filmIdLists = resList
        .map(res => mapGenericResponse(res.data))
        .filter(list => list.length !== 0)

      const foundInEvery = filmIdLists
        .map(filmIdList =>
          filmIdList.filter(filmId =>
            filmIdLists.every(_filmIdList => _filmIdList.includes(filmId))
          )
        )
        .flat()

      console.log('foundInEvery', foundInEvery)

      return [...new Set(foundInEvery)]
    })
    .catch(err => {
      return err
    })

  const filmQueries = uniqueFilmIdList.map(filmId =>
    axios.get(`https://swapi.dev/api/films/${filmId}`)
  )

  return Promise.all(filmQueries).then(responses =>
    responses.map(response => mapFilm(response.data))
  )
}
