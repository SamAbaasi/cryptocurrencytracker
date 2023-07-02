import { getCurrency } from '@/API/currencies';
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

const CoinPage = () => {
    const router = useRouter()
    const {id} = router.query;
    const { data } = useQuery(['currency', id], () => getCurrency(id))
    console.log(data);
    
    return (
        <div>
            <h1>{data?.name}</h1>
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