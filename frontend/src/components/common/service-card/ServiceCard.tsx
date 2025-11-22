import { useEffect, useState } from 'react';
import axiosInstance from '@/utils/axiosInstance';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

export default function ServiceCard({ type }: { type: "babysitter" | "donation" | "quran_tutor" | "advertisement" }) {
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosInstance.get(`/services/${type}`);
      setServices(data.services);
    };
    fetchData();
  }, [type]);

  return (
    <>
      {services.map((service, index) => (
        <Card key={service.id || index} className="w-[370px] shadow-md">
          <CardHeader className="p-0">
            <img src={service.image} alt={service.title} style={{ height: "150px" }} />
          </CardHeader>
          <CardContent className="p-4">
            <h3 className="font-bold">{service.title}</h3>
            <p className="py-3">{service.description}</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm" style={{ color: "#00ABB6" }}>More Info</p>
            <span>→</span>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
