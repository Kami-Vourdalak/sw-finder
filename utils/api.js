import { mapFilm, mapGenericResponse } from './mapResponses'
import axios from 'axios'

export async function fetchSwFilmsByQuery({ queryKey }) {
  const [, query] = queryKey

  const peoplePromise = axios.get(
    `https://swapi.dev/api/people/?search=${query}`
  )
  const planetsPromise = axios.get(
    `https://swapi.dev/api/planets/?search=${query}`
  )
  const speciesPromise = axios.get(
    `https://swapi.dev/api/species/?search=${query}`
  )
  const starshipsPromise = axios.get(
    `https://swapi.dev/api/starships/?search=${query}`
  )
  const vehiclesPromise = axios.get(
    `https://swapi.dev/api/vehicles/?search=${query}`
  )

  const uniqueFilmIdList = await Promise.all([
    peoplePromise,
    planetsPromise,
    speciesPromise,
    starshipsPromise,
    vehiclesPromise
  ])
    .then(resList => {
      const filmIdList = resList.map(res => mapGenericResponse(res.data)).flat()
      return [...new Set(filmIdList)]
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
