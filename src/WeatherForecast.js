import React, {useState, useEffect} from "react";
import "./styles.css";

export default function WeatherForecast(props){

    return(
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="weatherForecast-day">Fri</div>
                    {/* <img src={`https://openweathermap.org/img/wn/${props.weatherData.icon}@2x.png`} alt={weatherData.description} className="img-fluid" /> */}
                    <div className="weatherForecastTemperatures">
                        <span className="weatherForecastTemperature-max">20°</span>
                        <span className="weatherForecastTemperature-min">10°</span>
                    </div>
                </div>
            </div>
        </div>
    )
}