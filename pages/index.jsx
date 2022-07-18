import Head from 'next/head'
import SearchForm from '../components/search-form/search-form'
import FilmList from '../components/film-list/film-list'

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Wars finder</title>
        <meta name="description" content="finder for the star wars universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SearchForm />
        <div
          className="grid grid-cols-1 gap-2 sm:grid-cols-2 m-6"
          data-cy="list"
        >
          <FilmList />
        </div>
      </main>
    </>
  )
}
