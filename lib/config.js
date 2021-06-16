/* eslint-disable no-undef */
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USERNAME = process.env.SMTP_USERNAME;
const SMTP_PASSWORD = process.env.SMTP_PASSWORD;

const config = {
    spotify: {
        client_id,
        client_secret,
        refresh_token,
        NOW_PLAYING_ENDPOINT: `https://api.spotify.com/v1/me/player/currently-playing`,
        TOKEN_ENDPOINT: `https://accounts.spotify.com/api/token`,
        TOP_TRACKS_ENDPOINT: `https://api.spotify.com/v1/me/top/tracks`,
    },
    email: {
        address: 'me@thomasgormley.dev',
        smtp: {
            host: SMTP_HOST,
            port: SMTP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: SMTP_USERNAME,
                pass: SMTP_PASSWORD,
            },
        },
    },
    SEO: {
        defaultTitle: 'Thomas Gormley — Web & Software Developer',
        description: 'Web &amp; software developer based in Ballycastle.',
        openGraph: {
            type: 'website',
            locale: 'en_UK',
            url: 'https://www.thomasgormley.dev',
            site_name: 'Thomas Gormley',
        },
        twitter: {
            handle: '@thomasgormley99',
            site: '@thomasgormley99',
            cardType: 'summary_large_image',
        },
    },
    social: {
        twitter: 'https://twitter.com/thomasgormley99',
        github: 'https://github.com/thomasgormley',
    },
};

export default config;
