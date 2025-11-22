// src/services/contactService.ts
// src/types/contact.ts
import { Contact } from "@/types/concats";
import axiosInstance from "@/utils/axiosInstance";



export const fetchContacts = async (
  type?: string,

): Promise<Contact[]> => {
  const params: Record<string, string> = {};
  if (type) params.type = type;
  const { data } = await axiosInstance.get("/contact-us", { params });
  return data.data;
};
