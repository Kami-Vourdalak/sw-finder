import { useRouter } from 'next/router'
import Link from 'next/link'
import { useQuery } from 'react-query'
import { fetchSwFilm } from '../../utils/api'
import Crawl from 'react-star-wars-crawl'

// Import the necessary styles, or include them another way with your build process
import 'react-star-wars-crawl/lib/index.css'

export default function Film() {
  const router = useRouter()
  const { filmId } = router.query

  const {
    data: film,
    isLoading,
    isError
  } = useQuery(['film', filmId], fetchSwFilm, { enabled: !!filmId })

  if (isError) return <div>An error occurred</div>
  if (isLoading) return <div>Loading...</div>
  if (!film) return <div>Nothing found :(</div>
  return (
    <div className="flex flex-col m-6">
      <Link href="/">
        <a className="self-end w-20">Go Back</a>
      </Link>
      <div>
        <div>
          <div>{film.title}</div>
          <div>Episode {film.episode}</div>
          <div>Released date {film.releaseDate}</div>
          <div>Directed by {film.director}</div>
          <div>Produced by {film.producer}</div>
          <Crawl
            title={`Episode ${film.episode}`}
            subTitle={film.title}
            text={film.openingCrawl}
          />
        </div>
      </div>
    </div>
  )
}
