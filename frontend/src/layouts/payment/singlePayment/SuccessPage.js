import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
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
                    console.log("service id", ServiceId);
                    localStorage.setItem(`paymentCaptured_${ServiceId}`, "true");
                    if (ServiceId == "Ads123") {
                        setTimeout(() => {
                            navigate(`/halal-business-dirctory/advertise/${ServiceId}`);
                        }, 2000);
                    }
                    if (ServiceId === "Event123") {
                        setTimeout(() => {
                            navigate(`/events/create-event/${ServiceId}`);
                        }, 2000);
                    }
                }
                else {
                    localStorage.setItem(`paymentCaptured_${ServiceId}`, "false");
                }
            }
        };
        capturePayment();
    }, [orderId]);
    return (_jsx("div", { className: "w-full h-full flex justify-center items-center ", children: _jsxs("div", { className: "flex justify-center items-center flex-col gap-4 min-h-80 shadow-lg rounded-xl", children: [_jsx("span", { children: loading ? _jsx("p", { children: "Loading..." }) : _jsx(_Fragment, { children: "\u2705" }) }), loading && _jsx("p", { className: "text-center p-4", children: "Capturing payment..." }), error && _jsx("p", { className: "text-center p-4 text-red-500", children: error }), !loading && !error && (_jsxs(_Fragment, { children: [_jsx("h1", { className: "font-bold text-2xl p-2 mb-2", children: "Payment Successful!" }), _jsxs("p", { className: "text-center p-4", children: ["Thank you! Your payment has been processed successfully.", _jsx("br", {}), _jsx("span", { children: "You're all set." })] })] }))] }) }));
}
