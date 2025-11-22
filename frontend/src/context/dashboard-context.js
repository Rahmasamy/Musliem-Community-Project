import { jsx as _jsx } from "react/jsx-runtime";
import { getVisits } from "@/services/dashboard-anayltics.service";
import { createContext, useEffect, useState } from "react";
export const VisitContext = createContext({
    visits: 0,
    setVisits: () => { },
});
export const VisitProvider = ({ children }) => {
    const [visits, setVisits] = useState(0);
    useEffect(() => {
        const fetchVisits = async () => {
            const total = await getVisits();
            setVisits(total);
        };
        fetchVisits();
    }, []);
    return (_jsx(VisitContext.Provider, { value: { visits, setVisits }, children: children }));
};
