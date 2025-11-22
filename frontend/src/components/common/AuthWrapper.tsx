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
      className="BigContainer flex flex-col justify-center min-h-screen overflow-hidden w-full"
      style={wrapperStyle}
    >
      <div className="LoginContainer w-full sm:w-[97%] min-h-[90vh] flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8">
        {children}
      </div>
    </div>
  );
};

export default AuthWrapper;
