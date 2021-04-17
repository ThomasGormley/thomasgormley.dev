import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';
import NowPlaying from '../components/NowPlaying';
import TopTracks from '../components/TopTracks';

const Spotify = () => (
    <div className="min-h-screen bg-gray-900 ">
        <Head>
            <title>Thomas Gormley</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
            <Header />
            <div className="px-6 space-y-8">
                <NowPlaying />
                <TopTracks />
            </div>
        </Container>
    </div>
);

export default Spotify;
