import React from 'react';

const ErrorPage = () => {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div>
          <h1 className="text-9xl text-orange-500 text-center">404</h1>
          <h2 className="text-6xl text-center text-lime-600">
            Page <span className='text-orange-500'>not Found</span>
          </h2>
        </div>
      </div>
    );
};

export default ErrorPage;