import { useQuery } from 'react-query';
import NotPlaying from './NotPlaying';
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
                <h1 className="text-xl font-semibold text-gray-50">Now Playing</h1>
                {track?.isPlaying && (
                    <p className="mb-4 text-xs font-normal text-gray-500 ">
                        What I&apos;m currently listening to on Spotify
                    </p>
                )}
                <div className="">{isLoading ? <NotPlaying /> : <PlayingTrack track={track} />}</div>
            </section>
        </>
    );
};

export default NowPlaying;
