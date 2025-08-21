export default function BusRoute({ data }) {
    return (
        <div className="w-full font-lexend text-2xl px-5 py-3 flex gap-x-3 border-b-gray-300 border-b items-center">
            <div className="bg-amber-300 w-fit px-3 rounded-full shadow-md">{data.busNumber}</div>
            <div>
                <p className="text-2xl">{data.busStopName}</p>
                <p className="text-base">{data.busHeadsign}</p>
            </div>
        </div>
    )
}