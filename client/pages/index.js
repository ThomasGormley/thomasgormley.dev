import Head from 'next/head';
import SocialIcon from '../components/Icon/SocialIcon';
import { Navigation } from '../components/Navigation';

const socialButtonData = [
    {
        title: 'Spotify',
        colour: '#1ED760',
        href: '/spotify',
        icon: {
            url: '/icons/spotify.svg',
            svg: (
                <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="w-7 h-7"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <title>Spotify icon</title>
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path>
                </svg>
            ),
        },
    },
];

export default function Home() {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-gray-800 bg-cover bg-hero-computer">
                <Head>
                    <title>Thomas Gormley</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <header className="bg-gradient-to-b from-gray-800 to-transparent md:px-16 md:pt-4">
                    <Navigation />
                </header>

                <main className="w-full h-full px-20 pt-56 text-center md:px-24">
                    <div className="max-w-lg mx-auto">
                        <h1 className="text-3xl font-normal md:text-4xl text-gray-50 font-poppins">
                            I&apos;m a <span className="font-medium text-primary-600">web &amp; software</span>{' '}
                            developer based in
                            <span className="duration-150 ease-in-out cursor-pointer hover:text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-white to-orange-600">
                                {' '}
                                Ireland
                            </span>
                        </h1>
                    </div>
                    <div className="flex justify-center mt-6">
                        {socialButtonData.map((item) => (
                            <SocialIcon
                                key={item.title}
                                href={item.href}
                                title={item.title}
                                icon={item.icon}
                                size="12"
                                colour="gray"
                                hoverColour={item.colour}
                            />
                        ))}
                    </div>
                </main>
            </div>
        </>
    );
}
