export default async function getAllCryptos() {
  const coinApi = process.env.COINAPI
  return fetch(`http://rest.coinapi.io/v1/assets?apikey=${coinApi}`)
}
