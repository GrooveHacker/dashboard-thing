import { useEffect, useState } from "react";
import Context from "./Context";

export default function ContextProvider({ children }) {
    const [weatherData, setWeatherData] = useState(null);
    const [updateWeather, setUpdateWeather] = useState(true);

    useEffect(() => {
        (async () => {
            const result = await fetch("https://api.weather.gov/gridpoints/EWX/156,91/forecast");
            const data = await result.json();
            const periodData = data.properties.periods[0];

            setWeatherData({
                temperature: `${periodData.temperature}°${periodData.temperatureUnit}`,
                detailedForecast: periodData.detailedForecast
            });
        })();
    }, [updateWeather]);
    
    return (
        <Context.Provider value={{ weatherData, setUpdateWeather, updateWeather }}>
            {children}
        </Context.Provider>
    )
}