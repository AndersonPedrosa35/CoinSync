import Head from 'next/head'
import { getCryptosLimited } from '@/lib/getAllCryptos'
import ProviderCryptos from '@/context/cryptoContext'
import MainHome from '@/components/Main'

export default function Home({ cryptosList }: any) {
  return (
    <ProviderCryptos>
      <>
      <Head>
        <title>CoinSync</title>
        <meta name="description" content="Cryptos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <MainHome cryptosList={cryptosList} />
      </>
    </ProviderCryptos>
  )
}

export async function getStaticProps() {
  const cryptosList = await getCryptosLimited({ sizeItems: 10 })
  return {
    props: {
      cryptosList,
    },
    revalidate: 100
  }

}