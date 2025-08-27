
export interface Product {
  _id: string;
  user?: string;
  name: string;
  description: string;
  image: string;
  price: number;
  contactNumber: string;
}

export interface ProductContextType {
  products: Product[];
}