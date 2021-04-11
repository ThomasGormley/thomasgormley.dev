import Head from 'next/head';
import { Navigation } from '../components/Navigation';
import NowPlaying from '../components/NowPlaying';
import TopTracks from '../components/TopTracks';

const Spotify = () => (
    <div className="min-h-screen bg-gray-900 ">
        <Head>
            <title>Thomas Gormley</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="max-w-4xl mx-auto">
            <header className=" md:py-4">
                <Navigation />
            </header>
            <NowPlaying />
            <TopTracks />
        </div>
    </div>
);

export default Spotify;
