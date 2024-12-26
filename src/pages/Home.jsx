import React from "react";
import Country from "../components/Country";
import countriesData from "../assets/CountriesData.json";

const Home = () => {
  return (
    <>
      {/* Scroll Top */}
      <button type='button' aria-label='Scroll Top Button' className='button scroll-top flex flex-ai-c flex-jc-c scale-effect'>
        <i className='fa-regular fa-chevron-up icon'></i>
      </button>

      {/* Header  */}
      <header className='header'>
        <div className='container flex flex-jc-sb flex-ai-c'>
          <div className='logo'>
            <a href='index.html'>
              <h1>Where in the world?</h1>
            </a>
          </div>
          <button type='button' aria-label='Theme Switcher Button' id='dark-mode-button' className='theme-toggle flex flex-jc-sb flex-ai-c'>
            <i className='fa-regular fa-moon theme-icon'></i>
            <span className='theme-text'>Dark Mode</span>
          </button>
        </div>
      </header>

      {/* Filters  */}
      <section className='filters'>
        <div className='container'>
          <div className='search-wrapper'>
            <i className='fa-regular fa-magnifying-glass search-icon'></i>
            <input type='text' id='search-input' className='search-input' placeholder='Search for a country...' />
          </div>
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
        </div>
      </section>

      {/* Countries  */}
      <main className='main'>
        <div className='container'>
          <section id='countries-grid' className='countries-grid'>
            {countriesData.map(country => (
              <Country key={country.name} country={country} />
            ))}
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
