import { useState } from "react";
import './App.css';
const SearchBar = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState("");
    const handleSearch = () => {
      onSearch(searchValue);
    };
  
    return (
      <div className="search-bar">
        <input
          placeholder="Enter city name"
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    );
  };
  export default SearchBar;