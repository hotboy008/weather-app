import { useEffect, useState } from "react";
import getWeather from "./weatherAPI";
import WeatherItem from "./weatherItem";

export default function Content(){
    const [city, setCity] = useState('Черкассы');
    const [weather, setWeather] = useState(null);
    const [activeCard, setCard] = useState(0);

    const daysOfWeeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let days = [];

    useEffect(async () => {
        city && setWeather(await getWeather(city));
    }, [city]);

    if(weather){    
        const timestampArray = weather.list;
    
        if(timestampArray){
            let counter = 0;
            timestampArray.map((value, i) => {
                let temp = new Date(value.dt * 1000).getDay();
    
                if(!days.includes(temp)){
                    days[counter] = temp;
                    counter++;
                }
            });
        }
    }

    function searchHandler(city){
        setCity(city);
    }

    function changeCard(direct){
        if(direct === 'left'){
            setCard(prev => prev === 0 ? 4 : prev - 1);
        }
        else if(direct === 'right'){
            setCard(prev => prev >= 4 ? 0 : prev + 1);
        }
    }

    document.title = city;

    return (
        <>
            <div className='weatherContent'>
                {weather != null &&
                <WeatherItem day={daysOfWeeks[days[activeCard]]} weather={weather.list} activeDay={activeCard} onClick={searchHandler} changeCard={changeCard} />}
            </div>
        </>
    );
}