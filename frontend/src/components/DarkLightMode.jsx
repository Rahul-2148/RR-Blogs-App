import React, { useState, useEffect } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const DarkLightMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#1a202c';
      document.body.style.color = '#ffffff';
    } else {
      document.body.style.backgroundColor = '#ffffff';
      document.body.style.color = '#000000';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button 
      onClick={toggleTheme} 
      style={{
        padding: '8px',
        borderRadius: '50%',
        outline: 'none',
        cursor: 'pointer',
        background: theme === 'light' ? '#e2e8f0' : '#4a5568',
        color: theme === 'light' ? '#1a202c' : '#ffffff',
        border: 'none'
      }}
      aria-label="Toggle Dark/Light Mode">
      {theme === 'light' ? <BsMoon size={24} /> : <BsSun size={24} />}
      {/* {theme === 'light' ? '🌙' : '☀'} */}

    </button>
  );
};

export default DarkLightMode;
