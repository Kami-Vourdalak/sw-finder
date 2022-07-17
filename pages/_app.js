import Layout from '../components/layout/layout'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()
export default function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}
