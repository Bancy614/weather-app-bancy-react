import React from "react";
import WeatherForecast from "./WeatherForecast";
import Weather from "./Weather";

export default function WeatherForecastDay(props){
    function maxTemperature(){
        let temperature=Math.round(props.data.temp.max);
        return `${temperature}°`
    }
    function minTemperature(){
        let temperature=Math.round(props.data.temp.min);
        return `${temperature}°`
    }

    function day(){
        let date= new Date(props.data.dt * 1000)
        let day= date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];

        
    }
    
    return(
        <div>
            <div className="weatherForecast-day">{day()}</div>
            <img src={`https://openweathermap.org/img/wn/{forecast[0].icon}@2x.png`} className="img-fluid" />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
                <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
            </div>

        </div>
        
    )
}