import { getTopTracks, getAccessToken } from '../../lib/spotify';
import config from '../../lib/config';

const {
    client_id,
    client_secret,
    refresh_token,
    NOW_PLAYING_ENDPOINT,
    TOKEN_ENDPOINT,
    TOP_TRACKS_ENDPOINT,
} = config.spotify;

export default async (_, res) => {
    const response = await getTopTracks();
    const { items } = await response.json();
    const { access_token } = await getAccessToken();

    return res.status(response.status).json({
        statusText: response.statusText,
        // json,
        client_id,
        client_secret,
        refresh_token,
        NOW_PLAYING_ENDPOINT,
        TOKEN_ENDPOINT,
        TOP_TRACKS_ENDPOINT,
        access_token,
    });

    // const tracks = items.slice(0, 10).map((track) => ({
    //     artist: track.artists.map((_artist) => _artist.name).join(', '),
    //     songUrl: track.external_urls.spotify,
    //     title: track.name,
    //     images: track.album.images,
    // }));

    // return res.status(200).json({ tracks });
};
