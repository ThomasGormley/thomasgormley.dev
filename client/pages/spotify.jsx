import Head from 'next/head';
import { useQuery } from 'react-query';
import { Navigation } from '../components/Navigation';
import TopTracks from '../components/TopTracks';

const Spotify = () => (
    <div className="min-h-screen bg-gray-800">
        <Head>
            <title>Thomas Gormley</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="bg-gradient-to-b from-gray-800 to-transparent md:px-16 md:pt-4">
            <Navigation />
        </header>
        <h1>Spotify</h1>

        <TopTracks />
    </div>
);

export default Spotify;
