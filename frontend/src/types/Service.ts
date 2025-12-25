
export interface IServiceResponse {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  data: IService[];
}

export interface IPendingServiceResponse {
    success: boolean;
  message: string;
  data: IService[];
}
export interface IService {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  location: string;
  phone: string;
  serviceType: string;
  extraDetails?: Record<string, any>; //  dynamic object
  createdAt: string;
  updatedAt: string;
  user?: {
    _id: string;
    fullName: string;
    photo?: string;
    email?: string;
  };
  adminApprovalStatus?: "pending" | "approved" | "rejected";
  paymentStatus?: "pending" | "confirmed" | "failed";
}