export default function BusRoute({ data }) {
    return (
        <div className="w-full font-lexend text-2xl px-5 py-3 flex gap-x-3 border-b-gray-300 border-b items-center">
            <div className="bg-amber-300 w-fit px-3 rounded-full shadow-md">{data.busNumber}</div>
            <div>
                <p className="text-2xl">{data.busStopName}</p>
                <p className="text-base">{data.busHeadsign}</p>
            </div>
            <div className="ml-auto gap-x-1 flex items-center bg-gray-100 px-3 py-2 rounded-full">
                <p className="text-2xl font-bold">{data.departureTime}<span className="font-normal text-lg"> min</span></p>
            </div>
            <div className="gap-x-1 flex items-center bg-gray-100 px-3 py-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" className={`${data.departureTime <= data.walkTime ? "fill-red-400" : "fill-green-400"} size-8`}>
                    <path d="m278.67-40 114.66-578.67-91.33 38v134h-67.33v-178L430-707.33q14-6 29.5-7.34 15.5-1.33 30.17 2.34 16 3.66 28.5 12 12.5 8.33 20.5 21L580-614q29.33 46 75.17 73.33 45.83 27.34 100.16 27.34v66.66q-70-1.33-124-30-54-28.66-95.66-83L502-417.33l89.33 82V-40h-66.66v-246.67l-100-86.66L348-40h-69.33ZM540-749.33q-31 0-53.17-22.17-22.16-22.17-22.16-53.17t22.16-53.16Q509-900 540-900t53.17 22.17q22.16 22.16 22.16 53.16 0 31-22.16 53.17Q571-749.33 540-749.33Z"/>
                </svg>
                <p className="text-2xl font-bold">{data.walkTime}<span className="font-normal text-lg"> min</span></p>
            </div>
        </div>
    )
}