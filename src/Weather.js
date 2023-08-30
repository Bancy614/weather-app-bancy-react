import React, {useState} from "react";

export default function Weather(props){
    const[weatherData, setWeatherData]=useState({ready:false});
    const[city, setCity]=useState(props.defaultCity);

    function handleSubmit(event){
        event.preventDefault();
        
    }

    function changeCity(event){
        setCity(event.target.value)
        
    }


    return(
        <div className="Weather">
            <form onSubmit={handleSubmit} >
                <div className="col-9">
                    <input type="search" onChange={changeCity} placeholder="Type a city..." autoFocus="on" autocomplete={false} />
                </div>

                <div className="col-3" >
                    <input type="submit" value="Search" className="btn btn-primary" />
                </div>
           </form>
           <h2>{props.defaultCity}</h2>
        </div>
    )
}