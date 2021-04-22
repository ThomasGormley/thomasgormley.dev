import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';
import Main from '../components/Main';
import PageLayout from '../components/PageLayout';

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
                    <Main />
                    <section id="projects" className="text-gray-50">
                        <h1>Projects</h1>
                    </section>
                </Container>
            </PageLayout>
        </>
    );
}
