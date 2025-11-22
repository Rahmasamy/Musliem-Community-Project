import { User } from "@/types/authTypes";

export interface Product {
  _id: string;
  user?: User;
  name: string;
  description: string;
  image: string;
  price: number;
  contactNumber: string;
}

export interface ProductContextType {
  products: Product[];
  page : number;
  totalPages: number;
  setPage : (pageNumber : number ) => void
  setFilters: (filters: { search?: string }) => void;

}