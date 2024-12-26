import React from "react";

const SearchBar = () => {
  return (
    <div className='search-wrapper'>
      <i className='fa-regular fa-magnifying-glass search-icon'></i>
      <input type='text' id='search-input' className='search-input' placeholder='Search for a country...' />
    </div>
  );
};

export default SearchBar;
