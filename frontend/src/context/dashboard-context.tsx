import { getVisits } from "@/services/dashboard-anayltics.service";
import React, { createContext, useEffect, useState, ReactNode } from "react";

interface VisitContextType {
  visits: number;
  setVisits: React.Dispatch<React.SetStateAction<number>>;
}

export const VisitContext = createContext<VisitContextType>({
  visits: 0,
  setVisits: () => {},
});

interface VisitProviderProps {
  children: ReactNode;
}

export const VisitProvider: React.FC<VisitProviderProps> = ({ children }) => {
  const [visits, setVisits] = useState<number>(0);

  useEffect(() => {
    const fetchVisits = async () => {
      const total = await getVisits();
      setVisits(total);
    };
    fetchVisits();
  }, []);

  return (
    <VisitContext.Provider value={{ visits, setVisits }}>
      {children}
    </VisitContext.Provider>
  );
};
