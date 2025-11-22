import { jsx as _jsx } from "react/jsx-runtime";
// src/context/eventContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "@/api/authApi";
const JoinedGroupContext = createContext(null);
export const useJoinedGroups = () => {
    const ctx = useContext(JoinedGroupContext);
    if (!ctx)
        throw new Error("use groups must be used inside Group Provider");
    return ctx;
};
export const JoinedGroupProvider = ({ children }) => {
    const [joinedGroups, setGroups] = useState([]);
    const rawAuth = localStorage.getItem("auth-storage");
    const accessToken = rawAuth ? JSON.parse(rawAuth).state?.user?.token : null;
    useEffect(() => {
        const loadJoinedGroups = async () => {
            if (!accessToken)
                return;
            try {
                const { data } = await axiosInstance.get("/groups/my-groups?page=1");
                setGroups(data.groups);
            }
            catch (err) {
                console.error("Failed to load groups", err);
            }
        };
        loadJoinedGroups();
    }, [accessToken]);
    return (_jsx(JoinedGroupContext.Provider, { value: { groups: joinedGroups }, children: children }));
};
