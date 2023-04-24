import Head from 'next/head'
// import styles from '@/styles/Home.module.css'
import { getCryptosLimited } from '@/lib/getAllCryptos'
import Header from '@/components/Header/'

export default function Home({ cryptosList }: any) {
  console.log(cryptosList)
  return (
    <>
      <Head>
        <title>CoinSync</title>
        <meta name="description" content="Cryptos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
    </>
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