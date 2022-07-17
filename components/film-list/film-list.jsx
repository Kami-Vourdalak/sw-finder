import { useAtom } from 'jotai'
import { searchTermAtom } from '../../store'
import FilmCard from '../film-card/film-card'
import { useQuery } from 'react-query'
import { fetchSwFilmsByQuery } from '../../utils/api'

export default function FilmList() {
  const [searchTerm] = useAtom(searchTermAtom)

  const {
    data: films,
    isLoading,
    isError
  } = useQuery(['search', searchTerm], fetchSwFilmsByQuery, {
    enabled: !!searchTerm
  })

  if (isError) return <div>An error occurred</div>
  if (isLoading) return <div>Loading...</div>
  if (films?.length === 0) return <div>Nothing found :(</div>
  return (
    <>
      {films?.map(film => (
        <FilmCard
          key={film.id}
          id={film.id}
          title={film.title}
          releaseDate={film.releaseDate}
          episode={film.episode}
        />
      ))}
    </>
  )
}
