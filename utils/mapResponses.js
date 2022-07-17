function mapEpisode(episode) {
  return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'][episode]
}

function getFilmId(filmUrl) {
  return filmUrl.replace(/[^0-9]+/g, '')
}

export function mapGenericResponse({ results }) {
  return results
    .map(result => result?.films?.map(filmUrl => getFilmId(filmUrl)))
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
