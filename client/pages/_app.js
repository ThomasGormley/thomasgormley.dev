import 'tailwindcss/tailwind.css';
import Head from 'next/head';
import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}

export default MyApp;
