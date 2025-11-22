import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const Checkout: React.FC = () => {
  const location = useLocation();
  const { title, price, plan_id } = location.state || {};
  const hasRenderedRef = useRef(false); // عشان نمنع rerender

  useEffect(() => {
    if (!plan_id || !window.paypal || hasRenderedRef.current) return;

    hasRenderedRef.current = true; // امنعي rerender للزرار

    window.paypal
      .Buttons({
        createSubscription: function (_data: any, actions: any) {
          return actions.subscription.create({
            plan_id: plan_id,
          });
        },
        onApprove: function (data: any) {
          console.log("✅ Subscription Approved:", data);
          // TODO: send subscription info to backend
        },
        onError: function (err: any) {
          console.error("❌ PayPal Error:", err);
        },
      })
      .render("#paypal-button-container");
  }, [plan_id]);

  return (
    <div className="p-6 text-center w-full flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-4">Checkout - {title}</h1>
      <p className="text-lg mb-6">Price: ${price} / month</p>
      <div id="paypal-button-container" className="w-[50%]"></div>
    </div>
  );
};

export default Checkout;
