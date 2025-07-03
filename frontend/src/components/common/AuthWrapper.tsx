// src/components/AuthWrapper.js
import React from 'react';
import backgroundImg from '../../assets/backgound-img.png';

const AuthWrapper: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div
      className="BigContainer flex flex-col items-center justify-center min-h-screen overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(rgb(255 255 255 / 10%), rgb(255, 255, 255)), 
          linear-gradient(to left, rgba(255, 255, 255, 0.62), rgb(255, 255, 255)), 
          url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        backgroundSize: 'contain',
      }}
    >
      {children}
    </div>
  );
};

export default AuthWrapper;
