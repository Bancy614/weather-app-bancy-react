import React from "react";
import WeatherForecast from "./WeatherForecast";
import Weather from "./Weather";
import WeatherIcon from "./WeatherIcon";

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
            <div className="weatherForecast-day mt-2">{day()}</div>
            <WeatherIcon icon={props.data.weather[0].icon} />
            
            
            <div className="WeatherForecast-temperatures mt-0">
                <span className="WeatherForecast-temperature-max">{maxTemperature()}</span>
                <span className="WeatherForecast-temperature-min">{minTemperature()}</span>
            </div>

        </div>
        
    )
}