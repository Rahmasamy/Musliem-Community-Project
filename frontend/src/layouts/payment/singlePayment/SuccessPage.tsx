import { useEffect } from "react";
import { usePayment } from "@/hooks/useSinglePayment";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("token");
  const PAYERID = searchParams.get("PayerID");
  const { handleCaptureOrder, loading, error } = usePayment();
  const ServiceId = searchParams.get("serviceId");
  const navigate = useNavigate();
  useEffect(() => {
    const capturePayment = async () => {
      if (orderId) {
        const result = await handleCaptureOrder(orderId);
        console.log("capature result", result);
        if (result.success) {
          // ✅ Payment captured successfully → set in localStorage
          const ServiceId = localStorage.getItem("currentServiceId");

          console.log("service id",ServiceId)
          localStorage.setItem(`paymentCaptured_${ServiceId}`, "true");
          if (ServiceId == "Ads123") {
            setTimeout(() => {

              navigate(`/halal-business-dirctory/advertise/${ServiceId}`);
            },2000)
          }
          if (ServiceId === "Event123"){
             setTimeout(() => {

              navigate(`/events/create-event/${ServiceId}`);
            },2000)
          }
        } else {
          localStorage.setItem(`paymentCaptured_${ServiceId}`, "false");
        }
      }
    };

    capturePayment();
  }, [orderId]);

  return (
    <div className="w-full h-full flex justify-center items-center ">
      <div className="flex justify-center items-center flex-col gap-4 min-h-80 shadow-lg rounded-xl">
        <span>{loading ? <p>Loading...</p> : <>✅</>}</span>

        {loading && <p className="text-center p-4">Capturing payment...</p>}
        {error && <p className="text-center p-4 text-red-500">{error}</p>}
        {!loading && !error && (
          <>
            <h1 className="font-bold text-2xl p-2 mb-2">Payment Successful!</h1>
            <p className="text-center p-4">
              Thank you! Your payment has been processed successfully.
              <br />
              <span>You're all set.</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
