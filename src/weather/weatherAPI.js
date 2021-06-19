const api = 'e17bf6c85063207745c48be9da45ba5f';

export default async function getWeather(city){    
    let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}`);

    if(!response.ok){
        response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Черкассы&appid=${api}`);
    }

    return response.json();
}