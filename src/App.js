import "./styles.css";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather  />
      <Footer />
      
    </div>
  );
}
