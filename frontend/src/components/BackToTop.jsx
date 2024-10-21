import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show or hide the button depending on the scroll position and calculate scroll progress
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / windowHeight) * 100;
    
    setScrollProgress(scrollPercentage);

    // Toggle visibility for the back to top button
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Side scroll progress bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '5px',
          height: '100%',
          background: `linear-gradient(to bottom, #4f46e5 ${scrollProgress}%, #e5e7eb ${scrollProgress}%)`,
          zIndex: 100,
        }}
      />

      {/* Back to top button with circular progress */}
      {isVisible && (
        <div
          className="fixed bottom-5 right-5 w-16 h-16 flex items-center justify-center"
          style={{
            background: `conic-gradient(#4f46e5 ${scrollProgress}%, #e5e7eb ${scrollProgress}%)`,
            borderRadius: '50%',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-800 focus:outline-none transition duration-300"
          >
            <FaArrowUp className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
};

export default BackToTop;
