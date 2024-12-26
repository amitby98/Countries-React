import React from "react";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";

const Filters = () => {
  return (
    <section className='filters'>
      <div className='container'>
        <SearchBar />
        <DropDown />
      </div>
    </section>
  );
};

export default Filters;
