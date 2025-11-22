export interface Advertisement {
  _id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  phone: string;
  extraDetails: {
    startDate: Date;
    endDate: Date;
    targetUrl: string;
  };
}

export interface AdvertisementContextType {
  data: Advertisement[] | [];
}