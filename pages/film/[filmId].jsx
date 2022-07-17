import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Film() {
  const router = useRouter()
  const { filmId } = router.query

  return (
    <div>
      <Link href="/">
        <div className="cursor-pointer border">Go Back</div>
      </Link>
      <p>Film: {filmId}</p>
    </div>
  )
}
