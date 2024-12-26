import React from "react";
import Country from "../components/Country";
import countriesData from "../assets/CountriesData.json";
import Header from "../components/Header";
import Filters from "../components/Filters";

const Home = () => {
  return (
    <>
      <Header />
      <Filters />

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
