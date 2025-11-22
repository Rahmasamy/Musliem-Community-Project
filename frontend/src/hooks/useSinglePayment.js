import { captureOrder, createOrder, } from "@/services/SingleItemOrDonationPaypal";
import { useState } from "react";
export function usePayment() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const handleCreateOrder = async (amount, serviceId) => {
        setLoading(true);
        setError(null);
        try {
            console.log("from handleCreate order", serviceId);
            const order = await createOrder(amount, serviceId);
            const approve_url = order.links.find((l) => l.rel === "payer-action")?.href;
            return approve_url;
        }
        catch (error) {
            setError(error.message || "Payment error");
            return null;
        }
        finally {
            setLoading(false);
        }
    };
    const handleCaptureOrder = async (orderId) => {
        setLoading(true);
        setError(null);
        try {
            const data = await captureOrder(orderId); // backend response
            if (data.status === "COMPLETED") {
                return {
                    success: true,
                    data: data, // full capture response, includes custom_id
                };
            }
            return {
                success: false,
                data: null,
            };
        }
        catch (err) {
            setError(err.message || "Capture error");
            return {
                success: false,
                data: null,
            };
        }
        finally {
            setLoading(false);
        }
    };
    return { handleCreateOrder, handleCaptureOrder, loading, error };
}
