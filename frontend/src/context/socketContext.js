import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";
const SocketContext = createContext(null);
export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    useEffect(() => {
        const socketInstance = io(BASE_URL, {
            withCredentials: true,
            transports: ["websocket"],
        });
        setSocket(socketInstance);
        socketInstance.on("connect", () => {
            console.log("✅ Connected to socket:", socketInstance.id);
        });
        socketInstance.on("disconnect", () => {
            console.log("❌ Disconnected from socket");
        });
        return () => {
            socketInstance.disconnect();
        };
    }, []);
    return (_jsx(SocketContext.Provider, { value: socket, children: children }));
};
export const useSocket = () => useContext(SocketContext);
