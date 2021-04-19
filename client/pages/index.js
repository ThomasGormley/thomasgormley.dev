import Head from 'next/head';
import Container from '../components/Container';
import Header from '../components/Header';
import SocialLinks from '../components/SocialLinks';
import { motion } from 'framer-motion';
import PageLayout from '../components/PageLayout';

const variants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
};

export default function Home() {
    return (
        <>
            <PageLayout>
                <Head>
                    <title>Thomas Gormley — Web &amp; Software Developer</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Container>
                    <Header />

                    <motion.main
                        variants={variants}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            duration: 5,
                        }}
                        className="w-full h-full px-20 pt-56 text-center md:px-24"
                    >
                        <div className="max-w-lg mx-auto cursor-default">
                            <h1 className="text-3xl font-normal md:text-4xl text-gray-50 font-poppins">
                                I&apos;m a <span className="font-medium text-primary-600">web &amp; software</span>{' '}
                                developer based in
                                <span className="duration-150 ease-in-out hover:text-green-500"> Ireland</span>
                            </h1>
                        </div>

                        <SocialLinks />
                    </motion.main>
                </Container>
            </PageLayout>
        </>
    );
}
