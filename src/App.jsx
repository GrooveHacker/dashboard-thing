import './App.css'
import ContextProvider from './ContextProvider';
import Head from './Head';
import WeatherForecast from './WeatherForecast';
import BusRoutes from './BusRoutes';

function App() {
    return (
        <ContextProvider>
            <Head />
            <WeatherForecast />
            <BusRoutes name="H-E-B" location="East 41st Street" api="https://bgtfs.transitapp.com/v3/public/plan?from_lat=30.2873401&from_lon=-97.7433835&to_lat=30.30063720000001&to_lon=-97.71995679999999&mode=transit&consider_downtimes=true" />
            <BusRoutes name="Bates Recital Hall" location="Robert Dedman Drive" api="https://bgtfs.transitapp.com/v3/public/plan?from_lat=30.2873401&from_lon=-97.7433835&to_lat=30.30063720000001&to_lon=-97.71995679999999&mode=transit&consider_downtimes=true" />
        </ContextProvider>
    )
}

export default App
