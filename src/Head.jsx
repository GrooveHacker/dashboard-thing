import { useState, useEffect, useContext } from "react";
import Context from "./Context";

export default function Head() {
    const { weatherData } = useContext(Context);
    const [time, setTime] = useState("--");
    const [date, setDate] = useState("--");

    useEffect(() => {
        const updateTimeDate = () => {
            const date = new Date();
            const timeString = date.toLocaleTimeString();
            const dateString = date.toDateString();

            setTime(timeString);
            setDate(dateString);
        }

        setInterval(updateTimeDate, 1000);
        updateTimeDate();
    }, []);

    return (
        <div className="flex w-full bg-black text-white text-xl font-lexend font-normal p-5">
            <p className="w-32">{time}</p>
            <p className="text-amber-400">{weatherData?.temperature || "--"}</p>
            <p className="ml-auto">{date}</p>
        </div>
    )
}