import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import AboveGradiantParent from '@/components/common/above-gradiant/AboveGradiant';
import GoBack from '@/components/common/GoBack/GoBack';
import Navigate from '@/components/common/navigator/Navigate';
import PricingPlans from '@/features/pricing-plan/PricingPlan';
export default function MemberShipPage() {
    return (_jsxs(_Fragment, { children: [_jsx(AboveGradiantParent, { children: _jsx(GoBack, {}) }), _jsx("div", { className: "flex w-full items-center justify-center", children: _jsx(Navigate, { home: "Home", arg2: "Halal Business Directory" }) }), _jsx("div", { className: "flex flex-col bg-gray-50 min-h-screen lg:flex-row", children: _jsx("main", { className: "flex-1", children: _jsx("div", { className: "min-h-screen bg-gray-50 flex items-center justify-center", children: _jsx(PricingPlans, {}) }) }) })] }));
}
