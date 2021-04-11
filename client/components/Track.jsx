const Track = ({ track }) => (
    <div className="relative h-20 mb-5 text-white cursor-pointer rounded-2xl">
        <div className="h-auto">
            <img
                src={track.images[0].url}
                className="absolute top-0 object-cover w-full h-full opacity-10 filter blur-md rounded-2xl"
                alt={track.title}
            />
        </div>
        <div className="flex">
            <img
                src={track.images[1].url}
                className="absolute object-contain h-full opacity-75 filter blur-lg rounded-2xl"
                alt={track.title}
            />
            <img src={track.images[1].url} className="relative object-contain h-20 rounded-2xl" alt={track.title} />
            <div className="flex flex-col px-5">
                <span className="font-semibold text-gray-200 text-md">{track.title}</span>
                <span className="text-xs font-normal text-gray-500">{track.artist}</span>
            </div>
        </div>
    </div>
);

export default Track;
