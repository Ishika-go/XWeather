import {useState} from "react";
import './App.css';
import Searchbar from "./Searchbar";
import WeathercardDisplay from "./WeatherDisplay";

 function App() {
  const[city,setCity] = useState("");
  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };
  // console.log(city);

  return (
    <div className="App">  
      {/* <Searchbar searchtext = {city} setSearchtext = {setCity} /> */}
      <Searchbar onSearch={handleSearch} />
      <WeathercardDisplay city = {city} />
    </div>
  )
}

export default App;
