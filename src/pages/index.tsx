import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { getCurrenciesList, getSupportedCurrenciesList } from '@/API/currencies';
import { CurrencyType } from '@/Types/Cryptos';
import CoinList from '@/components/CoinList';
import FilterSection from '@/components/FilterSection';
import SearchBar from '@/components/SearchBar';
import { useState } from 'react';

function Home() {
  const [page, setPage] = useState<number>(1);

  const { data: supportedCurrencies } = useQuery<string[]>({
    queryKey: ['supportedCurrencies'],
    queryFn: getSupportedCurrenciesList,
  });

  const { data: currencies, isLoading } = useQuery<CurrencyType[]>({
    queryKey: ['currencies', page],
    queryFn: () => getCurrenciesList(page),
  });

  const [filteredCurrencies, setFilteredCurrencies] = useState<CurrencyType[] | undefined>(currencies);

  const handleFilter = (coin: string) => {
    const filtered = currencies?.filter((curr: CurrencyType) => curr.symbol === coin);
    setFilteredCurrencies(filtered);
  };

  return (
    <div className='p-8 flex flex-col justify-center items-center'>
      <SearchBar cryptoList={currencies} />
      <FilterSection currencies={supportedCurrencies} onFilter={handleFilter} />
      <CoinList coins={filteredCurrencies} isLoading={isLoading} />
    </div>
  );
}

export default Home;

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  const page = 1;

  await queryClient.prefetchQuery(['supportedCurrencies'], getSupportedCurrenciesList);
  await queryClient.prefetchQuery(['currencies', page], () => getCurrenciesList(page));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
