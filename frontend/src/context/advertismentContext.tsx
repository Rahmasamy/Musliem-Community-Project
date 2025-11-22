// advertiseContext.tsx
import { useContext, createContext, useEffect, useState } from 'react';
import { Advertisement,AdvertisementContextType } from '@/utils/context-interface/advertismentInterface';
import axiosInstance from '@/api/authApi';


const AdvertisementContext = createContext<AdvertisementContextType | null>(null);

export const useAdvertisement = () => {
  const ctx = useContext(AdvertisementContext);
  if (!ctx) throw new Error("useAdvertisement must be used within AdvertismentProvider");
  return ctx;
};

export const AdvertismentProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<Advertisement []>([]);

  useEffect(() => {
    const load = async () => {
      const { data } = await axiosInstance.get('/services/active-advertisments');
      console.log("advertisment data ==================== ",data )
      setData(data.data || []);
    };
    load();
  }, []);

   return (
     <AdvertisementContext.Provider value={{ data }}>
      {children}
    </AdvertisementContext.Provider>
   )
};
