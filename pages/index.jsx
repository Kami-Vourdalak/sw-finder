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
        <div className="flex flex-wrap w-full p-6">
          <FilmList />
        </div>
      </main>
    </>
  )
}
