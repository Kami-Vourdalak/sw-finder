function mapEpisode(episode) {
  return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'][episode]
}

function getFilmId(filmUrl) {
  return filmUrl.replace(/[^0-9]+/g, '')
}

export function mapGenericResponse({ results }) {
  return results
    .map(result => {
      if (result.films) return result.films.map(filmUrl => getFilmId(filmUrl))
      return [getFilmId(result.url)]
    })
    ?.flat()
}

export function mapFilm({
  url,
  title,
  episode_id: episode,
  release_date: releaseDate
}) {
  return {
    id: getFilmId(url),
    title,
    episode: mapEpisode(episode),
    releaseDate
  }
}
