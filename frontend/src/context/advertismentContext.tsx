// advertiseContext.tsx
import { useContext, createContext, useEffect, useState } from 'react';
import axiosInstance from '@/utils/axiosInstance';
import { Advertisement,AdvertisementContextType } from '@/utils/context-interface/advertismentInterface';


const AdvertisementContext = createContext<AdvertisementContextType | null>(null);

export const useAdvertisement = () => {
  const ctx = useContext(AdvertisementContext);
  if (!ctx) throw new Error("useAdvertisement must be used within AdvertismentProvider");
  return ctx;
};

export const AdvertismentProvider = ({ children }: { children: React.ReactNode }) => {
  const [ad, setAd] = useState<Advertisement | null>(null);

  useEffect(() => {
    const load = async () => {
      const { data } = await axiosInstance.get('/services/advertisement');
      setAd(data[0]);
    };
    load();
  }, []);

   return (
     <AdvertisementContext.Provider value={{ ad }}>
      {children}
    </AdvertisementContext.Provider>
   )
};
