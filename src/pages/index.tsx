import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import getAllCryptos from '@/lib/getAllCryptos'

export default function Home({ cryptosList }) {
  return (
    <>
      <Head>
        <title>CoinSync</title>
        <meta name="description" content="Cryptos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
    </>
  )
}

export async function getStaticProps() {
  const cryptosList = getAllCryptos()
  return {
    props: {
      cryptosList,
    },
    revalidate: 1
  }

}