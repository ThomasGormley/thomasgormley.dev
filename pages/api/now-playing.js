import { getNowPlaying } from '../../lib/spotify';

export default async (_, res) => {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ isPlaying: false });
    }

    const song = await response.json();
    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map((_artist) => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImage640 = song.item.album.images[0].url;
    const albumImage300 = song.item.album.images[1].url;
    const songUrl = song.item.external_urls.spotify;
    const progress = song.progress_ms;
    const duration = song.item.duration_ms;

    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30');

    return res.status(200).json({
        isPlaying,
        title,
        artist,
        album,
        albumImage640,
        albumImage300,
        songUrl,
        progress,
        duration,
    });
    // return res.status(200).json({
    //     song,
    // });
};
