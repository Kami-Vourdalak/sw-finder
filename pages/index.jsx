import Head from 'next/head'
import AppHeader from '../components/app-header/app-header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Wars finder</title>
        <meta name="description" content="finder for the star wars universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AppHeader />
      </main>
    </>
  )
}
