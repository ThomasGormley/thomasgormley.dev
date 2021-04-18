import querystring from 'querystring';
import config from '../lib/config';

const {
    client_id,
    client_secret,
    refresh_token,
    NOW_PLAYING_ENDPOINT,
    TOKEN_ENDPOINT,
    TOP_TRACKS_ENDPOINT,
} = config.spotify;

// eslint-disable-next-line no-undef
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

export const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        }),
    });
    return response.json();
};

export const getTopTracks = async () => {
    const { access_token } = await getAccessToken();
    return fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();

    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};
