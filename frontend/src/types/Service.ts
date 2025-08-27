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
}