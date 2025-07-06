

import { useEffect, useState } from "react";
import NConnectionImg from '@/assets/imgs/No-connection.png'
import './NoConnection.css'
const NoConnection = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isReallyOnline, setIsReallyOnline] = useState(true);
  const [lastChecked, setLastChecked] = useState(new Date().toLocaleTimeString());

  // Test real connectivity by trying to fetch a reliable external resource
  const testRealConnection = async () => {
    try {
      // Use a lightweight, reliable endpoint that should always be available
      const response = await fetch('https://httpbin.org/status/200', {
        method: 'HEAD',
        mode: 'no-cors',
        cache: 'no-cache',
      });
      return true;
    } catch (error) {
      try {
        // Fallback: try to fetch a small image from a CDN
        const response = await fetch('https://www.google.com/favicon.ico', {
          method: 'HEAD',
          mode: 'no-cors',
          cache: 'no-cache',
        });
        return true;
      } catch (fallbackError) {
        return false;
      }
    }
  };

  useEffect(() => {
    const updateStatus = async () => {
      const navigatorStatus = navigator.onLine;
      const realStatus = navigatorStatus ? await testRealConnection() : false;
      
      setIsOnline(navigatorStatus);
      setIsReallyOnline(realStatus);
      setLastChecked(new Date().toLocaleTimeString());
      
      // This will now log every time connection status changes
      console.log('Navigator online:', navigatorStatus);
      console.log('Really online:', realStatus);
      console.log('Showing no connection:', !realStatus);
    };

    const handleOnline = () => {
      console.log('Online event triggered');
      updateStatus();
    };

    const handleOffline = () => {
      console.log('Offline event triggered');
      setIsOnline(false);
      setIsReallyOnline(false);
      setLastChecked(new Date().toLocaleTimeString());
    };

    // Listen for browser online/offline events
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Test connection every 10 seconds
    const interval = setInterval(updateStatus, 10000);

    // Initial check
    updateStatus();

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      clearInterval(interval);
    };
  }, []);

  // Show no connection screen if either navigator.onLine is false OR real connection test fails
  const showNoConnection = !isOnline || !isReallyOnline;

  if (!showNoConnection) return null;

  return (
    <div className="no-connection h-screen flex flex-col gap-2 justify-center items-center bg-gray-100 text-center">
      <img src={NConnectionImg} alt="No connection" />
      <p className="text-4xl font-bold ">No connection</p>
      <p className="mt-2 ">Oops! It seems you're currently offline.</p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2  text-white  go-home "
      >
        Refresh
      </button>
    </div>
  );
};

export default NoConnection;