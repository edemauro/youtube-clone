import React from 'react';
import MDSpinner from 'react-md-spinner';

const LoadingPage = () => {
  return (
    <div className="loading-wrap">
      <MDSpinner 
        size={100} />
    </div>
  );
};

export default LoadingPage;