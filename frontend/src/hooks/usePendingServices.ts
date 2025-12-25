import { useEffect, useState } from "react";
import { IService } from "@/types/Service";
import Services from "@/services/serviceService";

export const usePendingServices = () => {
  const [services, setServices] = useState<IService[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPendingServices = async () => {
      try {
        const res = await Services.getAllPendingServices();
        if (res.success) {
          setServices(res.data);
        } else {
          setError("Failed to fetch pending services");
        }
      } catch (err) {
        setError(err?.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPendingServices();
  }, []);

  return { services, loading, error };
};
