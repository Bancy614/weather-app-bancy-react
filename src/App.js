import "./styles.css";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import WeatherForecast from "./WeatherForecast";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather  />
      <WeatherForecast />
      <Footer />
      
    </div>
  );
}
