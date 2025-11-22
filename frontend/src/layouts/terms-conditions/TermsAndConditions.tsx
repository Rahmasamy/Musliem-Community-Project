import AboveGradiantParent from "@/components/common/above-gradiant/AboveGradiant";
// import Describtion from "@/components/common/description/Describtion";
import GoBack from "@/components/common/GoBack/GoBack";
// import Title from "@/components/common/title/Title";
import React from "react";
import Navigate from "@/components/common/navigator/Navigate";
import "./terms-conditions.css";

export default function TermsAndConditions() {
  return (
    <>
      <AboveGradiantParent>
        <GoBack />
      </AboveGradiantParent>
      <Navigate home="Home" arg2="Terms & Conditions" />

      <div className="max-w-5xl mx-auto px-5 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-teal-600 font-medium mt-2">
            Updated for Crescent Hub — Community. Trust. Connection.
          </p>
        </div>

        <div className="space-y-10 grid grid-cols-2 gap-2">
          {/* SECTION */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              By creating an account, browsing the Platform, or using any
              features, you acknowledge that you have read, understood, and
              agree to these Terms.
            </p>
          </div>

          {/* SECTION */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              2. Eligibility
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              You must be at least 13 years old, reside in the U.S., and be
              legally able to enter agreements.
            </p>
          </div>

          {/* SECTION */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              3. User Accounts
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              You are responsible for accurate information, account security,
              and all activity performed through your account.
            </p>
          </div>

          {/* SECTION */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              4. Acceptable Use
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Users may not post illegal, hateful, fraudulent, or harmful
              content, impersonate others, promote scams, or disrupt the
              platform.
            </p>
          </div>

          {/* SECTION */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              5. Listings, Advertising & Transactions
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Crescent Hub is not responsible for accuracy of user content or
              disputes between buyers and sellers.
            </p>
          </div>

          {/* SECTION */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              6. Paid Features & Subscriptions
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Premium features may require a paid plan. Fees are non-refundable
              unless required by law.
            </p>
          </div>

          {/* SECTION */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              7. Content Ownership
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Users retain ownership of content but grant Crescent Hub rights to
              display and distribute it to operate the platform.
            </p>
          </div>

          {/* SECTION */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              8. Termination
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              We may suspend or terminate accounts for violations of these
              terms.
            </p>
          </div>

          {/* SECTION */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              9. Disclaimers
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Crescent Hub is provided “as is” without warranties of any kind.
            </p>
          </div>

          {/* SECTION */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              10. Limitation of Liability
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Crescent Hub is not liable for indirect, incidental, or
              consequential damages.
            </p>
          </div>

          {/* SECTION */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              11. Governing Law
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              These terms are governed by the laws of the State of Pennsylvania.
            </p>
          </div>

          {/* SECTION */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1">
            <h2 className="text-2xl font-bold text-teal-600">
              12. Changes to Terms
            </h2>
            <p className="text-gray-600 mt-3 leading-relaxed">
              Crescent Hub may update these Terms at any time without required
              notice.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
