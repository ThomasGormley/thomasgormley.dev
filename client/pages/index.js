import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PageLayout from '../components/PageLayout';
import Projects from '../components/Projects';

export default function Home() {
    return (
        <>
            <PageLayout>
                <Head>
                    {/* <title>Thomas Gormley — Web &amp; Software Developer</title> */}
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container>
                    <Header />
                    <Hero />
                    {/* <Projects /> */}
                </Container>
            </PageLayout>
        </>
    );
}
