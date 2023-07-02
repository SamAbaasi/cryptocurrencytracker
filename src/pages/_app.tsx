import React, { useState } from "react";
import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {config} from '@/lib/react-query-config';

export default function MyApp({Component, pageProps}: AppProps) {
    const [queryClient] = useState(() => new QueryClient(config))
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component  {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
    )
}