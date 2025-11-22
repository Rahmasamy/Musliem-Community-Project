export interface DashboardProject {
  user: string;
  date: string;
  type: string;
  status: "Approved" | "Pending" | "Rejected";
}

export interface DashboardProjectsResponse {
  success: boolean;
  total: number;
  data: DashboardProject[];
}

export interface PaymentPayload {
  userId: string;
  productType: "product" | "event" | "ad";
  productId?: string;
  eventId?: string;
  ServiceId?: string;
  amount: number;
  currency?: string;
  transactionId?: string;
  meta?: Record<string, any>;
}

export interface Payment {
  _id: string;
  userId: {
    _id: string;
    fullName: string;
    email: string;
  };
  productType: string;
  amount: number;
  currency: string;
  transactionId: string;
  createdAt: string;
}


