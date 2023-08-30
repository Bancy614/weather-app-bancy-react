import React, {useState} from "react";
import axios from "axios";

export default function Weather(props){
    const[weatherData, setWeatherData]=useState({ready:false});
    const[city, setCity]=useState(props.defaultCity);

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
            humidity:response.data.main.humidity,
            city:response.data.name,
            date:new Date(response.data.dt*1000),
            description:response.data.weather[0].description,
            icon:response.data.weather[0].icon,
            wind:response.data.wind.speed,
        });
    }
     function search(){
        const apiKey="a4ba73c43b7f0b69291107044ef46ca6"
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
       
        axios.get(apiUrl).then(showWeather);

     }

if (weatherData.ready){
    return(
        <div className="Weather">
            <form onSubmit={handleSubmit} >
                <div className="row">
                <div className="col-9">
                    <input type="search" onChange={changeCity} placeholder="Type a city..." autoFocus="on" autoComplete={false} />
                </div>

                <div className="col-3" >
                    <input type="submit" value="Search" className="btn btn-primary" />
                </div>

                </div>
                
           </form>
           <h2>{city}</h2>
           <ul>
           {/* <li>to add date</li> */}
           
            <li>
                <span>
                <img src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`} alt={weatherData.description} />
                </span>
                <span className="celcius" >Temperature:{Math.round(weatherData.temperature)}</span>
                <span className="unit" >°C </span></li>
            <li>Description:{weatherData.description}</li>
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind:{Math.round(weatherData.wind)}Km/h</li>
           </ul>
        </div>
    );

}else{
    search()
    return "Loading ..."
}
    
}