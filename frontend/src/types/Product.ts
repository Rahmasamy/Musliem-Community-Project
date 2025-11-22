export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  contactNumber: string;
  adminApprovalStatus: "pending" | "approved" | "rejected";
  paymentStatus: "pending" | "confirmed" | "failed";
  createdAt: string;
  updatedAt: string;
  user : User

}
export interface User {
    _id:string;
    fullName : string;
    photo:string;
    email:string;

}
export interface IPendingProductsResponse {
  pendingProducts: IProduct[];
  page: number;
  totalPages: number;
  total: number;
}
