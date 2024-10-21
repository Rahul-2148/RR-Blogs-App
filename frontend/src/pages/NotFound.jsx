import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl mb-6 text-gray-800">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link 
          to="/" 
          className="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold py-2 px-6 rounded-lg transition duration-300 ease-in-out"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
