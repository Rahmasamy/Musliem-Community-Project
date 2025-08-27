// src/context/eventContext.tsx
import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { Group ,GroupContextType} from "@/utils/context-interface/groupInterface";



const groupContext = createContext< GroupContextType| null>(null);

export const useGroups = () => {
  const ctx = useContext(groupContext);
  if (!ctx) throw new Error("use groups must be used inside Group Provider");
  return ctx;
};

export const GroupProvider = ({ children }: { children: React.ReactNode }) => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    const loadGroups = async () => {
      const { data } = await axiosInstance.get("/groups?page=1");
      
      setGroups(data.groups); // because the API returns { events: [...] }
    };
    loadGroups();
  }, []);

  return (
    <groupContext.Provider value={{ groups }}>
      {children}
    </groupContext.Provider>
  );
};
