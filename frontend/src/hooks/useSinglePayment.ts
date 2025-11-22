import {
  captureOrder,
  createOrder,
} from "@/services/SingleItemOrDonationPaypal";
import { useState } from "react";

export function usePayment() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const handleCreateOrder = async (amount: string, serviceId: string) => {
    setLoading(true);
    setError(null);
    try {
      console.log("from handleCreate order", serviceId);
      const order = await createOrder(amount, serviceId);
      const approve_url = order.links.find(
        (l: any) => l.rel === "payer-action"
      )?.href;
      return approve_url;
    } catch (error: any) {
      setError(error.message || "Payment error");
      return null;
    } finally {
      setLoading(false);
    }
  };
  const handleCaptureOrder = async (orderId: string) => {
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
    } catch (err: any) {
      setError(err.message || "Capture error");
      return {
        success: false,
        data: null,
      };
    } finally {
      setLoading(false);
    }
  };
  
  return { handleCreateOrder, handleCaptureOrder, loading, error };
}
