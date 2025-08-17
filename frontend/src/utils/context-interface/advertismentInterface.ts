export interface Advertisement {
  _id: string;
  name: string;
  image: string;
  description: string;
  location: string;
  phone: string;
  extraDetails: {
    openDate: string;
    businessName: string;
    businessImage: string;
  };
}

export interface AdvertisementContextType {
  ad: Advertisement | null;
}