export interface Service {
  _id?: string;
  name: string;
  image?: string;
  description?: string;
  price?: number;
  location?: string;
  phone?: string;
  serviceType: string;
 extraDetails?: Record<string, any>;
}
export interface IServiceResponse {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  services: Service[];
}
export interface ServiceState {
  services: IServiceResponse;
  loading: boolean;
  error: string | null;
  getServicesByType: (type: string) => Promise<void>;
  createService: (data: Service) => Promise<void>;
  updateService: (id: string, data: Partial<Service>) => Promise<void>;
  deleteService: (id: string) => Promise<void>;
}