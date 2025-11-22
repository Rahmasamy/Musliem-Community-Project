import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Suspense, lazy } from "react";
// Common components
export const Footer = lazy(() => import("@/components/common/footer/Footer"));
export const Navbar = lazy(() => import("@/components/common/Navbar/Navbar"));
export const ProtectedRoute = lazy(() => import("@/components/common/protected-routes/ProtectedRoutes"));
export const Checkout = lazy(() => import("@/components/common/plan-card/Checkout"));
// Pages / Layouts
export const Aboutus = lazy(() => import("@/layouts/aboutus/Aboutus"));
export const AllGroupsPage = lazy(() => import("@/layouts/AllGroupsPage/AllGroupsPage"));
export const ContactUs = lazy(() => import("@/layouts/contact-us/ContactUs"));
export const CreateGroup = lazy(() => import("@/layouts/createGroup/CreateGroup"));
export const ForgetPassword = lazy(() => import("@/layouts/forgetPassword/ForgetPassword"));
export const GroupDetails = lazy(() => import("@/layouts/GroupDetails/GroupDetails"));
export const GroupPage = lazy(() => import("@/layouts/GroupPage/GroupPage"));
export const HalalBusinessPage = lazy(() => import("@/layouts/HalalBusinessDirctoryPage/HalalBusinessPage"));
export const Home = lazy(() => import("@/layouts/Home/Home"));
export const Login = lazy(() => import("@/layouts/login/Login"));
export const MemberShipPage = lazy(() => import("@/layouts/MemberShip/MemberShipPage"));
export const Messages = lazy(() => import("@/layouts/messages/Messages"));
export const MoreInfo = lazy(() => import("@/layouts/MoreInfo/MoreInfo"));
export const NotFoundLayout = lazy(() => import("@/layouts/not-foundpage/NotFoundLayout"));
export const PrivacyPolicy = lazy(() => import("@/layouts/privacy-policy/PrivacyPolicy"));
export const Register = lazy(() => import("@/layouts/register/Register"));
export const ResetPass = lazy(() => import("@/layouts/reset-password/ResetPass"));
export const TermsAndConditions = lazy(() => import("@/layouts/terms-conditions/TermsAndConditions"));
export const VerifyAccount = lazy(() => import("@/layouts/verify/VerifyAccount"));
export const YourGroupsPage = lazy(() => import("@/layouts/YourGroupsPage/YourGroupsPage"));
// Halal Business related
export const AdvertisePage = lazy(() => import("@/layouts/advertisePage/AdvertisePage"));
export const ApplyForRolePage = lazy(() => import("@/layouts/apply-for-role-page/ApplyForRolePage"));
export const SellProductsPage = lazy(() => import("@/layouts/sell-products-page/SellProductsPage"));
// Profile related
export const ProfilePage = lazy(() => import("@/layouts/ProfilePage/ProfilePage"));
export const ProfileSection = lazy(() => import("@/layouts/ProfleSection/ProfileSection"));
export const ProfileAdvertisments = lazy(() => import("@/layouts/ProfileAdvertisments/ProfileAdvertisments"));
export const ProfileListing = lazy(() => import("@/layouts/ProfileListing/ProfileListing"));
export const ProfilePayments = lazy(() => import("@/layouts/ProfilePayments/ProfilePayments"));
// Service related
export const ServicePage = lazy(() => import("@/layouts/ServicePage/ServicePage"));
export const OurProducts = lazy(() => import("@/layouts/ourProducts/OurProducts"));
export const DonationPage = lazy(() => import("@/layouts/DonationPage/DonationPage"));
export const BabySitterPage = lazy(() => import("@/layouts/BabySitter/BabySitterPage"));
export const QuranTutor = lazy(() => import("@/layouts/QuranTutor/QuranTutor"));
export const ProductDetails = lazy(() => import("@/layouts/ProductDetails/ProductDetails"));
// Events related
export const AllEvents = lazy(() => import("@/features/contactus-form/All-Events/AllEvents"));
export const YourEvents = lazy(() => import("@/features/MoreInfo/YourEvents/YourEvents"));
export const CreateEvent = lazy(() => import("@/layouts/apply-for-role-page/createEvents/CreateEvent"));
export const EventsPage = lazy(() => import("@/layouts/apply-for-role-page/EventsPage/EventsPage"));
export const EventDetails = lazy(() => import("@/layouts/EventDetails/EventDetails"));
// Payment related
export const PaymentPage = lazy(() => import("@/layouts/paymentPage/PaymentPage"));
export const SuccessPage = lazy(() => import("@/layouts/payment/singlePayment/SuccessPage"));
export const FailedPage = lazy(() => import("@/layouts/payment/singlePayment/FailedPage"));
// Admin dashboard
export const PresentationDshoard = lazy(() => import("@/layouts/admin-dashboard/presentation-anayltics/PresentationDshoard"));
export const DashboardEvents = lazy(() => import("@/layouts/admin-dashboard/events/DashboardEvents"));
export const ReportContactUs = lazy(() => import("@/layouts/admin-dashboard/reports-contactus/ReportContactUs"));
export const DashbordGroups = lazy(() => import("@/layouts/admin-dashboard/groups/DashbordGroups"));
export const AdminDashboard = lazy(() => import("@/layouts/admin-dashboard/AdminDashboard"));
export const UserDashboard = lazy(() => import("@/layouts/admin-dashboard/users/UserDashboard"));
export const ProductDashboard = lazy(() => import("@/layouts/admin-dashboard/products/ProductDashboard"));
import Loader from "@/components/common/loader/Loader";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
function LayoutWrapper({ children }) {
    const location = useLocation();
    const hideNavbarRoutes = [
        "/login",
        "/register",
        "/forget-pass",
        "/reset-password",
        "/verify-pass",
    ];
    const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);
    return (_jsxs(_Fragment, { children: [!shouldHideNavbar && _jsx(Navbar, {}), children, !shouldHideNavbar && _jsx(Footer, {})] }));
}
export default function AppRoutes() {
    return (_jsx(BrowserRouter, { children: _jsx(LayoutWrapper, { children: _jsx(Suspense, { fallback: _jsx(Loader, {}), children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsxs(Route, { path: "/admin-dashboard", element: _jsx(ProtectedRoute, { requiredRole: "admin", children: _jsx(AdminDashboard, {}) }), children: [_jsx(Route, { index: true, element: _jsx(ProtectedRoute, { requiredRole: "admin", children: _jsx(PresentationDshoard, {}) }) }), _jsx(Route, { path: "dashboard-anayltics", element: _jsx(ProtectedRoute, { requiredRole: "admin", children: _jsx(PresentationDshoard, {}) }) }), _jsx(Route, { path: "dashboard-events", element: _jsx(ProtectedRoute, { requiredRole: "admin", children: _jsx(DashboardEvents, {}) }) }), _jsx(Route, { path: "dashboard-groups", element: _jsx(ProtectedRoute, { requiredRole: "admin", children: _jsx(DashbordGroups, {}) }) }), _jsx(Route, { path: "dashbord-contactus", element: _jsx(ProtectedRoute, { requiredRole: "admin", children: _jsx(ReportContactUs, {}) }) }), _jsx(Route, { path: "dashbord-users", element: _jsx(ProtectedRoute, { requiredRole: "admin", children: _jsx(UserDashboard, {}) }) }), _jsx(Route, { path: "dashbord-products", element: _jsx(ProtectedRoute, { requiredRole: "admin", children: _jsx(ProductDashboard, {}) }) })] }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "/register", element: _jsx(Register, {}) }), _jsx(Route, { path: "forget-pass", element: _jsx(ForgetPassword, {}) }), _jsx(Route, { path: "/more-info", element: _jsx(MoreInfo, {}) }), _jsx(Route, { path: "/aboutus", element: _jsx(Aboutus, {}) }), _jsx(Route, { path: "/contactus", element: _jsx(ContactUs, {}) }), _jsx(Route, { path: "/privacy-policy", element: _jsx(PrivacyPolicy, {}) }), _jsx(Route, { path: "/terms-conditions", element: _jsx(TermsAndConditions, {}) }), _jsx(Route, { path: "/verify-pass", element: _jsx(VerifyAccount, {}) }), _jsx(Route, { path: "/reset-password", element: _jsx(ResetPass, {}) }), _jsxs(Route, { path: "/Groups", element: _jsx(GroupPage, {}), children: [_jsx(Route, { index: true, element: _jsxs(_Fragment, { children: [_jsx(AllGroupsPage, {}), _jsx(YourGroupsPage, {})] }) }), _jsx(Route, { path: "all-groups", element: _jsx(AllGroupsPage, {}) }), _jsx(Route, { path: "your-groups", element: _jsx(YourGroupsPage, {}) }), _jsx(Route, { path: "/Groups/create-group", element: _jsx(CreateGroup, {}) })] }), _jsx(Route, { path: "/membership", element: _jsx(MemberShipPage, {}) }), _jsxs(Route, { path: "/halal-business-dirctory", element: _jsx(HalalBusinessPage, {}), children: [_jsx(Route, { index: true, element: _jsx(_Fragment, { children: _jsx(AdvertisePage, {}) }) }), _jsx(Route, { path: "advertise/:id?", element: _jsx(AdvertisePage, {}) }), _jsx(Route, { path: "apply-for-role", element: _jsx(ApplyForRolePage, {}) }), _jsx(Route, { path: "sell-products", element: _jsx(SellProductsPage, {}) })] }), _jsxs(Route, { path: "/profilePage", element: _jsx(ProfilePage, {}), children: [_jsx(Route, { index: true, element: _jsx(_Fragment, { children: _jsx(ProfileSection, {}) }) }), _jsx(Route, { path: "profile-section", element: _jsx(ProfileSection, {}) }), _jsx(Route, { path: "your-advertisments", element: _jsx(ProfileAdvertisments, {}) }), _jsx(Route, { path: "yourlisting", element: _jsx(ProfileListing, {}) }), _jsx(Route, { path: "profile-payments", element: _jsx(ProfilePayments, {}) })] }), _jsxs(Route, { path: "/ServicesPage", element: _jsx(ServicePage, {}), children: [_jsx(Route, { index: true, element: _jsx(_Fragment, { children: _jsx(OurProducts, {}) }) }), _jsx(Route, { path: "our-products", element: _jsx(OurProducts, {}) }), _jsx(Route, { path: "product-details/:id", element: _jsx(ProductDetails, {}) }), _jsx(Route, { path: "donations", element: _jsx(DonationPage, {}) }), _jsx(Route, { path: "baby-sitter", element: _jsx(BabySitterPage, {}) }), _jsx(Route, { path: "quran-tutor", element: _jsx(QuranTutor, {}) })] }), _jsxs(Route, { path: "/events", element: _jsx(EventsPage, {}), children: [_jsx(Route, { index: true, element: _jsx(_Fragment, { children: _jsx(AllEvents, {}) }) }), _jsx(Route, { path: "all-Events", element: _jsx(AllEvents, {}) }), _jsx(Route, { path: "your-Events", element: _jsx(YourEvents, {}) }), _jsx(Route, { path: "create-event/:id?", element: _jsx(CreateEvent, {}) }), _jsx(Route, { path: "/events/:id", element: _jsx(EventDetails, {}) })] }), _jsx(Route, { path: "/group-details/:id", element: _jsx(GroupDetails, {}) }), _jsx(Route, { path: "/messages/user/:userId/:flag", element: _jsx(Messages, {}) }), _jsx(Route, { path: "/payment", element: _jsx(PaymentPage, {}) }), _jsx(Route, { path: "/checkout", element: _jsx(Checkout, {}) }), _jsx(Route, { path: "/success-payment", element: _jsx(SuccessPage, {}) }), _jsx(Route, { path: "/failed-payment", element: _jsx(FailedPage, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFoundLayout, {}) })] }) }) }) }));
}
