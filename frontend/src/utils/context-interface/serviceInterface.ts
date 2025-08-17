export type ServiceType = "babysitter" | "donation" | "quran_tutor" | "advertisement";

export interface ServiceContextType {
  services: any[];
  loadServices: (type: ServiceType) => Promise<void>;
}
