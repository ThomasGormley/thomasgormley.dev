import { Spotify } from './Icons';

const NotPlaying = () => (
    <div className="flex space-x-2 text-gray-50">
        <span className="text-[#1ED760] w-7 h-7">
            <Spotify />
        </span>
        <div className="inline-flex">
            <p className="font-medium text-gray-50 ">Not Playing</p>
            <span className="mx-2 text-gray-300"> – </span>
            <p className="text-gray-300 ">Spotify</p>
        </div>
    </div>
);

export default NotPlaying;
