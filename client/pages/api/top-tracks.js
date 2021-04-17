import { getTopTracks } from '../../lib/spotify';
import config from '../../lib/config';

const { client_id } = config.spotify;

export default async (_, res) => {
    const response = await getTopTracks();
    const { items } = await response.json();
    console.log(client_id);
    const tracks = items.slice(0, 10).map((track) => ({
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.external_urls.spotify,
        title: track.name,
        images: track.album.images,
        client_id,
    }));

    return res.status(200).json({ tracks });
};
