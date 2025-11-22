import axiosInstance from "@/api/authApi";
// src/services/paymentService.ts
const Base_Url = import.meta.env.VITE_BASE_URL;
export async function createOrder(amount, ServiceId) {
    const body = {
        intent: "CAPTURE",
        payment_source: {
            paypal: {
                experience_context: {
                    return_url: `http://localhost:3001/success-payment?serviceId=${ServiceId}`,
                    cancel_url: `http://localhost:3001/failed-payment?serviceId=${ServiceId}`,
                    user_action: "PAY_NOW",
                },
            },
        },
        purchase_units: [
            {
                reference_id: ServiceId, // optional
                custom_id: ServiceId,
                amount: {
                    currency_code: "USD",
                    value: amount.toString(),
                },
            },
        ],
    };
    console.log("from Create order", ServiceId);
    const res = await fetch(`${Base_Url}/api/paypal/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
    });
    if (!res.ok)
        throw new Error("Failed to create order");
    return res.json();
}
export async function captureOrder(orderId) {
    const res = await fetch(`${Base_Url}/api/paypal/capture-order/${orderId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });
    if (!res.ok)
        throw new Error("Failed to capture order");
    return res.json();
}
export async function getOrder(orderId) {
    const res = await fetch(`${Base_Url}/api/paypal/get-order/${orderId}`);
    if (!res.ok)
        throw new Error("Failed to get order");
    return res.json();
}
export const createPayment = async (payload) => {
    const { data } = await axiosInstance.post(`/create-payment`, payload);
    return data;
};
export const getAllPayments = async () => {
    const { data } = await axiosInstance.get(`/all-payments`);
    return data;
};
export const getAllUserPayments = async () => {
    const { data } = await axiosInstance.get(`/all-login-payments`);
    return data;
};
