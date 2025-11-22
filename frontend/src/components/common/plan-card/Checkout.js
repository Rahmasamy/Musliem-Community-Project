import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
const Checkout = () => {
    const location = useLocation();
    const { title, price, plan_id } = location.state || {};
    const hasRenderedRef = useRef(false); // عشان نمنع rerender
    useEffect(() => {
        if (!plan_id || !window.paypal || hasRenderedRef.current)
            return;
        hasRenderedRef.current = true; // امنعي rerender للزرار
        window.paypal
            .Buttons({
            createSubscription: function (_data, actions) {
                return actions.subscription.create({
                    plan_id: plan_id,
                });
            },
            onApprove: function (data) {
                console.log("✅ Subscription Approved:", data);
                // TODO: send subscription info to backend
            },
            onError: function (err) {
                console.error("❌ PayPal Error:", err);
            },
        })
            .render("#paypal-button-container");
    }, [plan_id]);
    return (_jsxs("div", { className: "p-6 text-center w-full flex justify-center items-center flex-col", children: [_jsxs("h1", { className: "text-2xl font-bold mb-4", children: ["Checkout - ", title] }), _jsxs("p", { className: "text-lg mb-6", children: ["Price: $", price, " / month"] }), _jsx("div", { id: "paypal-button-container", className: "w-[50%]" })] }));
};
export default Checkout;
