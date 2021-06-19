import Alert from "../alert/alert";
import Controll from "./controll";

function transformTemp(temp){
    return (Math.round(temp - 273.15)) + '℃';
}

function transformTimestamp(timestamp){
    const time = new Date(timestamp * 1000);
    const result = time.toLocaleString('en-US', { hour: 'numeric', hour12: true });

    return result;
}

function HoursForecast(props){
    const hours = props.value;

    return (
        <>
            {hours.map(elem => {
                    return (
                        <div className='hoursForecast'>
                            <div>
                                <p className='timeStr'>Time: {transformTimestamp(elem.dt)}</p>
                                <p>Pressure: {elem.main.pressure}</p>
                                <p>Temperature: {transformTemp(elem.main.temp)}</p>
                                <p>Feels like: {transformTemp(elem.main.feels_like)}</p>
                            </div>
                            <div>
                                <img src={`http://openweathermap.org/img/wn/${elem.weather[0].icon}@2x.png`} alt='Dont loaded' />
                                <p>{elem.weather[0].description[0].toUpperCase() + elem.weather[0].description.slice(1)}</p>
                            </div>
                        </div>
                    )})
                }
        </>
    );
}

export default function WeatherItem(props){
    const days = [];
    let counter = 0;

    if(props.weather){
        for(let i = 0; i < 5; i++){
            days[i] = [];
            for(let j = 0; j < 8; j++){
                days[i][j] = props.weather[counter];
                counter++;
            }
        }
    }

    return (
        <>
            <div className='weatherItem'>
                <Controll {...props} />
                <HoursForecast value={days[props.activeDay]} />
                <Alert />
            </div>
        </>
    );
}