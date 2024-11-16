import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let[city, setCity] = useState("");
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="a2b12497aa46abb74e337f39e744d914";


    let getWeatherInfo = async()=>{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let JsonResponse = await response.json();
        
        let result ={
            city:city,
            temp: JsonResponse.main.temp,
            tempMin: JsonResponse.main.temp_min,
            tempMax: JsonResponse.main.temp_max,
            humidity: JsonResponse.main.humidity,
            feelsLike: JsonResponse.main.feels_like,
            weather: JsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }

   
    let handleChange = (evt) =>{
        setCity(evt.target.value);
    };
    let handleSubmit = async (evt)=>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }
    return(
        <div>
            <h3>Search For The Weather</h3>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br /><br />
            <Button variant="contained" type='submit'>Search</Button>
            <br /><br />
            </form>
        </div>
    )
}