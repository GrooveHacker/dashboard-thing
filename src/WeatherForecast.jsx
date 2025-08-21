import { useContext, useEffect, useRef } from "react";
import Context from "./Context";

export default function WeatherForecast() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const { weatherData, setUpdateWeather, updateWeather } = useContext(Context);

    useEffect(() => {
        /*const interval = setTimeout(() => {
            setScroll(scroll - 1);
            setScrollStyle(`translate-x-[${scroll + 1}px]`);
        }, 50);

        return () => clearTimeout(interval);*/

        if (containerRef.current === null || textRef.current === null || !weatherData?.detailedForecast) return;

        const animation = textRef.current.animate([
            { transform: "translateX(0px)", offset: 0.0697 },
            { transform: `translateX(-${textRef.current.scrollWidth - containerRef.current.offsetWidth + 40}px)` }
        ], {
            duration: 21_500,
            easing: "linear",
            fill: "forwards"
        });

        setTimeout(() => {
            setUpdateWeather(!updateWeather);
        }, 23_000);

        return () => {
            animation.cancel();
        }
    }, [weatherData, updateWeather, setUpdateWeather]);

    return (
        <div className="w-full font-lexend text-base text-white py-2 px-5 bg-cyan-500 overflow-hidden relative" ref={containerRef}>
            <p className="whitespace-nowrap relative" ref={textRef}>{weatherData?.detailedForecast || "--"}</p>
        </div>
    )
}