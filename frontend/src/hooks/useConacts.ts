// src/hooks/useContacts.ts
import { useQuery } from "@tanstack/react-query";
import { fetchContacts } from "@/services/contactusService";
import { Contact } from "@/types/concats";

export const useContacts = (
  type?: string,
) => {
  return useQuery<Contact[], Error>({
    queryKey: ["contacts", type],
    queryFn: () => fetchContacts(type),
    refetchInterval: 100,
    enabled: !!type,
  });
};

