import {useState,useEffect} from "react";
import axios from "axios";
import WeatherCard from "./WeatherCard";
import './App.css';
export default function WeatherDisplay({ city }){
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      if (city) {
        setLoading(true);
        axios
          .get(`https://api.weatherapi.com/v1/current.json`, {
            params: {
              key: "7ed8ac34a8a7426fa4093716232811",
              q: city,
            },
          })
          .then((response) => {
            setWeatherData(response.data);
          })
          .catch((error) => {
            console.error("Error fetchhing data");
            alert("Failed to fetch weather data");
          })
          .finally(() => {
            setLoading(false);
          });
      }
    }, [city]);
  
    return (
      <div className="weather-display">
        {loading && <p>Loading data...</p>}
        {!loading && weatherData && (
          <div className="weather-cards">
            <WeatherCard
              title="Temperature"
              value={`${weatherData.current.temp_c}°C`}
            />
            <WeatherCard
              title="Humidity"
              value={`${weatherData.current.humidity}%`}
            />
            <WeatherCard
              title="Condition"
              value={`${weatherData.current.condition.text}`}
            />
            <WeatherCard
              title="Wind Speed"
              value={`${weatherData.current.wind_kph} kph`}
            />
          </div>
        )}
      </div>
    );
  };