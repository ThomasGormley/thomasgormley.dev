import Head from 'next/head';
import { Navigation } from '../components/Navigation';

export default function Home() {
    return (
        <div className="min-h-screen bg-[#1b1b1b] bg-cover bg-hero-computer ">
            <Head>
                <title>Thomas Gormley</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="bg-gradient-to-b from-gray-800 to-transparent ">
                <div className="md:px-16 md:pt-4">
                    <Navigation />
                </div>
            </header>
        </div>
    );
}
