import Link from 'next/link'
import { useMemo } from 'react'
import { parse, formatDistanceStrict } from 'date-fns'

export default function FilmCard({ id, title, releaseDate, episode }) {
  const formattedDate = useMemo(() => {
    const date = parse(releaseDate, 'yyyy-MM-dd', new Date())
    return `${releaseDate} (${formatDistanceStrict(date, new Date())} ago)`
  }, [releaseDate])
  return (
    <Link href={`/film/${id}`}>
      <div className="flex flex-col w-full p-8 border rounded-xl">
        <div>{title}</div>
        <div>Episode {episode}</div>
        <div className="self-end text-xs">{formattedDate}</div>
      </div>
    </Link>
  )
}
