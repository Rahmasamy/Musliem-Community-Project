import React, { createContext, useContext, useEffect, useState } from "react";
import io, { Socket } from "socket.io-client";

const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

const SocketContext = createContext<Socket | null>(null);

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketInstance = io(BASE_URL, {
      withCredentials: true,
      transports: ["websocket"],
    });

    setSocket(socketInstance);

   
    return () => {
      socketInstance.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => useContext(SocketContext);
