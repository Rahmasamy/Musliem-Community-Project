// src/components/AuthWrapper.tsx
import React from 'react';
import backgroundImg from '../../assets/imgs/backgound-img.png';

interface AuthWrapperProps extends React.PropsWithChildren {
  gradientDirection?: 'left' | 'right' ;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children, gradientDirection = 'left' }) => {
  const wrapperStyle: React.CSSProperties = {
    backgroundImage: `
      linear-gradient(rgb(255 255 255 / 10%), rgb(255, 255, 255)), 
      linear-gradient(to ${gradientDirection}, rgba(255, 255, 255, 0.62), rgb(255, 255, 255)), 
      url(${backgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
    backgroundSize: 'contain',
  };

  return (
    <div
      className="BigContainer flex flex-col items-center justify-center min-h-screen overflow-hidden w-full"
      style={wrapperStyle}
    >
      <div className="LoginContainer w-[91%] max-w-6xl min-h-[90vh] flex justify-between items-center">
        {children}
      </div>
    </div>
  );
};

export default AuthWrapper;
