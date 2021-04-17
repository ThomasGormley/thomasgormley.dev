import { useQuery } from 'react-query';
import Track from './Track';

const fetchTopTracks = async () => {
    const data = await fetch('/api/top-tracks');
    const json = await data.json();
    if (!data.ok) {
        throw Error(data.statusText);
    }
    return json;
};

const TopTracks = () => {
    const { data, isLoading } = useQuery({
        queryFn: async () => await fetchTopTracks(),
        queryKey: 'top-tracks',
    });
    return (
        <>
            <section className="max-w-3xl py-4 mx-auto">
                <h1 className="text-xl font-semibold text-gray-50">Top Tracks</h1>
                <p className="mb-4 text-xs font-normal text-gray-500">
                    The tracks I&apos;ve been listening to recently on Spotify
                </p>
                <div className="grid grid-cols-2 mt-5">
                    {isLoading ? (
                        <p>Loading</p>
                    ) : (
                        data?.tracks?.map((track) => <Track track={track} key={track.title} />)
                    )}
                </div>
            </section>
        </>
    );
};

export default TopTracks;
