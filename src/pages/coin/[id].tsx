import { getCurrency } from '@/API/currencies';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

const CoinPage = () => {
    const router = useRouter()
    const {id} = router.query;
    const { data, isError, isLoading } = useQuery(['currency', id], () => getCurrency(id))
    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (isError) {
      return <p>Error occurred while fetching data.</p>;
    }
    
    return (
      <div className="container mx-auto p-8">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h1 className="text-4xl font-bold mb-4">{data?.name}</h1>
          </div>
        </div>
    )

}


export async function getServerSideProps({id}:{id: string}) {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['currency', id], () => getCurrency(id))
  
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    }
  }

export default CoinPage;