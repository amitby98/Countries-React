import React from "react";

const Dropdown = () => {
  return (
    <div className='dropdown-wrapper'>
      <div className='dropdown-header flex flex-jc-sb flex-ai-c'>
        <span>Filter by Region</span>
        <i className='fa-regular fa-chevron-down icon'></i>
      </div>
      <div className='dropdown-body show'>
        <ul>
          <li data-region='all'>All</li>
          <li data-region='africa'>Africa</li>
          <li data-region='americas'>America</li>
          <li data-region='asia'>Asia</li>
          <li data-region='europe'>Europe</li>
          <li data-region='oceania'>Oceania</li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
