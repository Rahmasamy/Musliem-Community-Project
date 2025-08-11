import PlanCard from "@/components/common/plan-card/PlanCard";
import React from "react";


const PricingPlans: React.FC = () => {
  const plans = [
    {
      title: "Free",
      subtitle: "Free Tier User",
      price: "0",
      perMonth: "$0 USD / month",
      buttonColor: "bg-teal-700",
      features: [
        "Create personal profile",
        "Browse service listings and groups",
        "Post up to 2 service requests/month",
        "Join up to 2 community groups",
        "RSVP to events",
        "Send up to 15 direct messages/month",
        "Access public events & services",
      ],
    },
    {
      title: "Professional",
      subtitle: "Service Provider Pro",
      price: "50",
      perMonth: "$5 USD / month",
      buttonColor: "bg-orange-500",
      popular: true,
      features: [
        "Unlimited service requests",
        "Ability to offer paid/free services",
        "Priority listing in search and directory",
        "Unlimited messaging",
        "Join exclusive premium groups",
        "Early event ticket access",
        "Exclusive sponsor discounts",
      ],
    },
    {
      title: "Agency",
      subtitle: "Business Advertising Options",
      price: "95",
      perMonth: "$95 per month",
      buttonColor: "bg-teal-700",
      features: [
        "Feature Eleven",
        "Feature Twelve",
        "Feature Thirteen",
        "Feature Fourteen",
        "Feature Fifteen",
        "Feature Sixteen",
        "Feature Seventeen",
        "Feature Eighteen",
        "Feature Nineteen",
      ],
    },
  ];

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-8">Find a Plan</h1>
      <div className="flex flex-col md:flex-row gap-6">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
