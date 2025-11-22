import { jsx as _jsx } from "react/jsx-runtime";
// src/context/groupContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
const groupContext = createContext(null);
export const useGroups = () => {
    const ctx = useContext(groupContext);
    if (!ctx)
        throw new Error("useGroups must be used inside GroupProvider");
    return ctx;
};
export const GroupProvider = ({ children }) => {
    const [groups, setGroups] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const loadGroups = async (pageNum = 1, searchTerm = "") => {
        setLoading(true);
        try {
            const { data } = await axiosInstance.get(`/groups?page=${pageNum}&limit=3&search=${searchTerm}`);
            setGroups(data.groups);
            setPage(data.page);
            setTotalPages(data.totalPages);
        }
        catch (err) {
            console.error("Error fetching groups:", err);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        loadGroups(1);
    }, []);
    return (_jsx(groupContext.Provider, { value: {
            groups,
            page,
            totalPages,
            loading,
            loadGroups,
            search,
            setSearch,
        }, children: children }));
};
