// src/hooks/useContacts.ts
import { useQuery } from "@tanstack/react-query";
import { fetchContacts } from "@/services/contactusService";
export const useContacts = (type) => {
    return useQuery({
        queryKey: ["contacts", type],
        queryFn: () => fetchContacts(type),
        refetchInterval: 100,
        enabled: !!type,
    });
};
