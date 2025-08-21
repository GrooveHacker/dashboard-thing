import { useContext, useEffect, useState } from "react";
import Context from "./Context";

export default function WeatherForecast() {
    const [scroll, setScroll] = useState(0);
    const [scrollStyle, setScrollStyle] = useState("");
    const { weatherData, setUpdateWeatherData, updateWeatherData } = useContext(Context);

    useEffect(() => {
        const interval = setTimeout(() => {
            setScroll(scroll - 1);
            setScrollStyle(`right-[${scroll - 1}px]`);
        }, 50);

        return () => clearTimeout(interval);
    }, [scroll]);

    return (
        <div className="w-full font-lexend text-base text-white py-2 px-5 bg-cyan-500 overflow-hidden">
            <p className={`w-fit whitespace-nowrap relative ${scrollStyle}`}>{weatherData?.detailedForecast || "--"}</p>
        </div>
    )
}