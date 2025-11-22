import AboveGradiantParent from "@/components/common/above-gradiant/AboveGradiant";
import GoBack from "@/components/common/GoBack/GoBack";
import React from "react";
import Navigate from "@/components/common/navigator/Navigate";

export default function PrivacyPolicy() {
  return (
    <>
      <AboveGradiantParent>
        <GoBack />
      </AboveGradiantParent>
      <Navigate home="Home" arg2="Privacy Policy" />

      <div className="max-w-5xl mx-auto px-5 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-teal-600 font-medium mt-2">
            Crescent Hub — Protecting Your Privacy and Data.
          </p>
        </div>

        <div className="space-y-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* SECTION */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              We collect personal information, usage data, device information, 
              and information voluntarily provided by users.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              To manage accounts, provide services, process payments, improve performance, 
              enhance security, and send updates.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              3. Sharing of Information
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              We do not sell your data. We share information only with service providers, 
              payment processors, and law enforcement when required by law.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              4. Cookies & Tracking
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              We use cookies for functionality, analytics, and personalization.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              5. Data Security
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              We use reasonable safeguards to protect your data, but cannot guarantee 100% security.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              6. Data Retention
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Data is retained as long as necessary for providing services or fulfilling legal obligations.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              7. Your Rights
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Users may request access, deletion, corrections, or opt out of marketing communications.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              8. Children’s Privacy
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Our services are not intended for children under 13.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              9. Changes to This Policy
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes to our practices.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              10. Contact Us
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              For questions or concerns, email us using the platform contact page.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
