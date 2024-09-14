import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ countries }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const userInput = e.target.value.toLowerCase();
    setSearchTerm(userInput);

    if (userInput) {
      const suggestions = countries.filter(
        (item) =>
          item.country.toLowerCase().includes(userInput) ||
          item.capital.toLowerCase().includes(userInput)
      );
      setFilteredSuggestions(suggestions);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setFilteredSuggestions([]);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a country or capital..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
      {filteredSuggestions.length > 0 && (
        <div className="suggestions-container">
          {filteredSuggestions.map((item, index) => (
            <div
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(`${item.country} - ${item.capital}`)}
            >
              {item.country} - {item.capital}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
