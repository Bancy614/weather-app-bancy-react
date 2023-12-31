import React, {useState} from "react";
import axios from "axios";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
import WeatherForecast from "./WeatherForecast";
import Weathericon from "./WeatherIcon";
    

export default function Weather(){
    const[weatherData, setWeatherData]=useState({ready:false});
    const[city, setCity]=useState("");

    function handleSubmit(event){
        event.preventDefault();
        search()
        
    }

    function changeCity(event){
        setCity(event.target.value)
        
    }
    function showWeather(response){
        setWeatherData({
            ready:true,
            temperature:response.data.main.temp,
            coordinates:response.data.coord,
            humidity:response.data.main.humidity,
            city:response.data.name,
            date:new Date(response.data.dt*1000),
            description:response.data.weather[0].description,
            icon:response.data.weather[0].icon,
            wind:response.data.wind.speed,
        });
    }
     function search(){
        const apiKey="6f578b96aa9505bcce148ac22cb85794"
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
       
        axios.get(apiUrl).then(showWeather);

     }

    return(
        <div class="container">
            <div class="card">
            <div class="wrapper">
            <div className="Weather">
           
           <form  onSubmit={handleSubmit}  >
                 
               <input type="search" onChange={changeCity} placeholder="Type a city..." className="d-flex" autoFocus="on" autoComplete="off" required/>
               
               <input type="submit" value="Search" />  
               
           </form>
          
             
      {weatherData.ready &&(
           <div>
               <h3 className="mt-2" >{city}</h3>
               <ul>
               <li>
                    <FormattedDate date={weatherData.date} />
               </li>
               <li className="text-capitalize description" >{weatherData.description}</li>
               
                   <li>
                   <span>
                           <Weathericon icon={weatherData.icon} />
                           
                       </span>
                       <span>
                           <WeatherTemperature celcius={weatherData.temperature} /> </span>
                       
                   </li>
                   
                   <li >Humidity:<span className="humidity">{weatherData.humidity}%</span></li>
                   <li>Wind:<span className="wind">{Math.round(weatherData.wind)}Km/h</span></li>
               </ul>
               <WeatherForecast coordinates={weatherData.coordinates} />
               
           </div>
          

        )}
        
  
   </div>

            </div>

            </div>
           

        </div>
        
          
            
        
  );        
     
}