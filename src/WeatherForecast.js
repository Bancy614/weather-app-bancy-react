import React, {useState, useEffect} from "react";
import "./styles.css";
import Weather from "./Weather";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
    let [loaded, setLoaded]=useState(false);
    let [forecast, setForecast]=useState(null);

   useEffect(()=>{
    setLoaded(false);
   }, [props.coordinates]);

    function handleResponse(response){
       
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded){
        return(
          <div>
   
            <div className="WeatherForecast">
                <div className="row">
           
                    {forecast.map(function(dailyForecast, index){
                        if(index < 5){
                            return(
                           <div className="col" key={index} >
                               <WeatherForecastDay data={dailyForecast}/>                
                           </div>
                            )
                        }else{
                   return null;
               }
              })} 
              
            </div>
               
           </div>
       </div>
      
     )
      
    } else{
        let apiKey="6f578b96aa9505bcce148ac22cb85794"
        let latitude= props.coordinates.lat;
        let longitude= props.coordinates.lon;
        let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        
        axios.get(apiUrl).then(handleResponse);

        return null;
       }
}
    