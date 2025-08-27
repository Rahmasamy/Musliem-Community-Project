import { ServiceType } from "../context-interface/serviceInterface";
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
export interface ServiceState {
  services: Service[];
  loading: boolean;
  error: string | null;
  getServicesByType: (type: string) => Promise<void>;
  createService: (data: Service) => Promise<void>;
  updateService: (id: string, data: Partial<Service>) => Promise<void>;
  deleteService: (id: string) => Promise<void>;
}