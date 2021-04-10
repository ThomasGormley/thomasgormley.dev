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
};
