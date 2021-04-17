import NotPlaying from './NotPlaying';

function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}

const PlayingTrack = ({ track }) => {
    const percent = (track.progress / track.duration) * 100;
    const elapsed = millisToMinutesAndSeconds(track.progress);
    const total = millisToMinutesAndSeconds(track.duration);

    if (!track.isPlaying) {
        return <NotPlaying />;
    }

    return (
        <div className="h-auto text-white cursor-pointer rounded-2xl">
            <div className="flex flex-row ">
                <img
                    src={track.albumImage300}
                    className="relative z-30 object-contain h-56 rounded-2xl "
                    alt={track.title}
                />
                <img
                    src={track.albumImage300}
                    className="absolute object-contain h-56 opacity-75 filter blur-lg rounded-2xl"
                    alt={track.title}
                />
                <div className="flex flex-col justify-between w-full px-5 ">
                    <div className="flex flex-col">
                        <span className="text-xl font-semibold text-gray-200">{track.title}</span>
                        <span className="text-xs font-normal text-gray-400">{track.artist}</span>
                        <span className="text-xs font-normal text-gray-600">{track.album}</span>
                    </div>

                    <div className="relative pb-5">
                        <span className="text-xs text-gray-600">
                            {elapsed} / {total}
                        </span>
                        <div className="flex h-1 mb-4 overflow-hidden text-xs bg-gray-500 rounded shadow-md">
                            <div
                                style={{ width: `${percent}%` }}
                                className="flex flex-col justify-center text-center text-white shadow-md bg-primary-800 whitespace-nowrap"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayingTrack;
