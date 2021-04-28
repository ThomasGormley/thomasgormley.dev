const TrackSkeleton = ({ length = 10 }) =>
    Array.from({ length }).map((_, i) => (
        <div className="relative h-20 mb-5 text-white rounded-2xl animate-pulse" key={i}>
            <div className="flex">
                <div className="w-20 h-20 bg-gray-800 rounded-2xl" />
                <div className="flex flex-col flex-1 min-w-0 px-3">
                    <div className="w-11/12 h-3 pt-1">
                        <div className="h-full bg-gray-800 rounded"></div>
                    </div>
                    <div className="w-2/3 h-3 pt-1">
                        <div className="h-full bg-gray-800 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    ));

export default TrackSkeleton;
