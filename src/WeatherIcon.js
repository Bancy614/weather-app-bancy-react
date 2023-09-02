import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props){
    return(
        <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.description} className="img-fluid "/>

    );
    } 
    
   