/* eslint-disable no-undef */
const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

export default {
    spotify: {
        client_id,
        client_secret,
        refresh_token,
        NOW_PLAYING_ENDPOINT: `https://api.spotify.com/v1/me/player/currently-playing`,
        TOKEN_ENDPOINT: `https://accounts.spotify.com/api/token`,
        TOP_TRACKS_ENDPOINT: `https://api.spotify.com/v1/me/top/tracks`,
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
