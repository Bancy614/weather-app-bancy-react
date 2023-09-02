import React from "react";
import Weather from "./Weather";

export default function WeatherIcon(props){
    return(
        
        <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}  className="img-fluid" />
                       
    )
}