import Link from 'next/link'

export default function FilmCard({ id, title, releaseDate, episode }) {
  return (
    <Link href={`/film/${id}`}>
      <div className="flex flex-col w-full sm:w-5/12 p-8 border rounded-xl mt-4 sm:even:ml-4">
        <div className="flex">
          <div>Episode {episode}</div>
          <div>{title}</div>
        </div>
        <div className="self-end text-xs">{releaseDate}</div>
      </div>
    </Link>
  )
}
