import { Product } from "../context-interface/productInterface";

export interface ProductState {
  products: Product[];
  error:string | null;
  loading: boolean;
  createProduct: (productData: Product, token: string) => Promise<void>;
}