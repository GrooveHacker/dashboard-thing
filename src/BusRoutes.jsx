import { useEffect, useState } from "react"
import BusRoute from "./BusRoute";

export default function BusRoutes({ name, location, api }) {
    const [update, setUpdate] = useState(true);
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await fetch(`https://corsproxy.io/?url=${api}`);
            const data = await result.json();
            const info = data.results
                .map((entry) => {
                    const walk = entry.legs[0];
                    const route = entry.legs[1].routes[0];
                    const departure = entry.legs[1].departures[0];
                    const itinerary = route.itineraries[0];

                    return {
                        walkTime: Math.ceil(walk.duration / 60),
                        departureTime: Math.floor((departure.departure_time - Date.now() / 1000) / 60),
                        busNumber: route.route_short_name,
                        busHeadsign: itinerary.merged_headsign,
                        busStopName: itinerary.stops[itinerary.plan_details.start_stop_offset].stop_name
                    }
                })
                .reduce((accumulator, entry) => {
                    if (!accumulator.map((entry) => entry.busNumber).includes(entry.busNumber)) {
                        accumulator.push(entry);
                    }

                    return accumulator;
                }, []);

            setRoutes(info);
        })();

        const timeout = setTimeout(() => {
            setUpdate(!update);
        }, 30_000);

        return () => {
            clearTimeout(timeout);
        }
    }, [update, api]);

    return (
        <>
            <div className="w-full font-lexend text-xl px-5 py-3 bg-gray-300"><span className="font-bold">{name}</span> @ {location}</div>
            {routes.map((route) => (
                <BusRoute key={route.busNumber} data={route} />
            ))}
        </>
    )
}