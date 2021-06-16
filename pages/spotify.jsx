import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';
import NowPlaying from '../components/NowPlaying';
import PageLayout from '../components/PageLayout';
import TopTracks from '../components/TopTracks';

const Spotify = () => (
    <PageLayout>
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
    </PageLayout>
);

export default Spotify;
