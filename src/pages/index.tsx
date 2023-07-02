
import {getCurrenciesList, getSupportedCurrenciesList } from '@/API/currencies';
import CoinList from '@/components/CoinList'
import SearchBar from '@/components/SearchBar';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import { useState } from 'react';
function Home() {
  const [page, setPage] = useState<number>(1)
  const { data: supportedCurrencies } = useQuery({ queryKey: ['supportedCurrencies'], queryFn: getSupportedCurrenciesList })
  const { data:currencies } = useQuery(['currencies', page], () => getCurrenciesList())
  console.log(supportedCurrencies);
  
  return (
    <div >
      <SearchBar />
      <CoinList filteredCoins={currencies} />
    </div>
  )
}

export default Home;

export async function getServerSideProps() {
  const queryClient = new QueryClient()
const page = 1;
  // await queryClient.prefetchQuery(['supportedCurrencies'], getSupportedCurrenciesList)
  await queryClient.prefetchQuery(['currencies', page], () => getCurrenciesList())

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}