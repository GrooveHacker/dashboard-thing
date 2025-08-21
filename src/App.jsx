import './App.css'
import ContextProvider from './ContextProvider';
import Head from './Head';
import WeatherForecast from './WeatherForecast';

function App() {
    return (
        <ContextProvider>
            <Head />
            <WeatherForecast />
        </ContextProvider>
    )
}

export default App
