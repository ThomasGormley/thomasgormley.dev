import { useQuery } from 'react-query';
import PlayingTrack from './PlayingTrack';

const fetchNowPlaying = async () => {
    const data = await fetch('/api/now-playing');
    const json = await data.json();
    if (!data.ok) {
        throw Error(data.statusText);
    }
    return json;
};

const NowPlaying = () => {
    const { data: track, isLoading } = useQuery({
        queryFn: async () => await fetchNowPlaying(),
        queryKey: 'now-playing',
    });
    return (
        <>
            <section className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-semibold text-gray-50">Now Playing</h1>
                <p className="py-2 text-xs font-normal text-gray-500">
                    What I&apos;m currently listening to on Spotify
                </p>
                <div className="mt-5 ">{isLoading ? <p>Loading</p> : <PlayingTrack track={track} />}</div>
            </section>
        </>
    );
};

export default NowPlaying;
