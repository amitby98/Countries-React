import React, { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className='header'>
      <div className='container flex flex-jc-sb flex-ai-c'>
        <div className='logo'>
          <a href='index.html'>
            <h1>Where in the world?</h1>
          </a>
        </div>
        <button type='button' aria-label='Theme Switcher Button' id='dark-mode-button' className='theme-toggle flex flex-jc-sb flex-ai-c' onClick={toggleDarkMode}>
          <i className={`fa-regular ${darkMode ? "fa-sun" : "fa-moon"} theme-icon`}></i>
          <span className='theme-text'>{darkMode ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
