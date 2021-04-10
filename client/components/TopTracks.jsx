import { useQuery } from 'react-query';

const fetchTopTracks = async () => {
    const data = await fetch('/api/top-tracks');
    const json = await data.json();
    return json;
};

const TopTracks = () => {
    const { data, status, error } = useQuery({
        queryFn: fetchTopTracks(),
        queryKey: 'top-tracks',
    });
    return (
        <div>
            <pre className="text-blue-300">{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default TopTracks;
