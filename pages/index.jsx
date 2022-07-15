import Head from 'next/head'
import SearchForm from '../components/search-form/search-form'

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
      </main>
    </>
  )
}
