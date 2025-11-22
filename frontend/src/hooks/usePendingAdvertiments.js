import { getPendingAdvertisements } from "@/services/getAllPendingAdvertisment";
import { useEffect, useState } from "react";
export const usePendingAdvertisements = () => {
    const [ads, setAds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        const fetchPendingAds = async () => {
            try {
                const res = await getPendingAdvertisements();
                if (res.success) {
                    setAds(res.data);
                }
                else {
                    setError("Failed to fetch pending ads");
                }
            }
            catch (err) {
                setError(err?.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchPendingAds();
    }, []);
    return { ads, loading, error };
};
