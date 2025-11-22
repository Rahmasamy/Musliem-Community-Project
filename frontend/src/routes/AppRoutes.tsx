import React, { Suspense, lazy } from "react";

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

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  const hideNavbarRoutes = [
    "/login",
    "/register",
    "/forget-pass",
    "/reset-password",
    "/verify-pass",
  
  ];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      {children}
      {!shouldHideNavbar && <Footer />}
    </>
  );
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <LayoutWrapper>
         <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
             
                <Home />
          
            }
          />

          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute requiredRole="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          >
            <Route
              index
              element={
                <ProtectedRoute requiredRole="admin">
                  <PresentationDshoard />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard-anayltics"
              element={
                <ProtectedRoute requiredRole="admin">
                  <PresentationDshoard />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard-events"
              element={
                <ProtectedRoute requiredRole="admin">
                  <DashboardEvents />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard-groups"
              element={
                <ProtectedRoute requiredRole="admin">
                  <DashbordGroups />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashbord-contactus"
              element={
                <ProtectedRoute requiredRole="admin">
                  <ReportContactUs />
                </ProtectedRoute>
              }
            />
             <Route
              path="dashbord-users"
              element={
                <ProtectedRoute requiredRole="admin">
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
             <Route
              path="dashbord-products"
              element={
                <ProtectedRoute requiredRole="admin">
                  <ProductDashboard />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="forget-pass" element={<ForgetPassword />} />
          <Route path="/more-info" element={<MoreInfo />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndConditions />} />
          <Route path="/verify-pass" element={<VerifyAccount />} />
          <Route path="/reset-password" element={<ResetPass />} />
          <Route path="/Groups" element={<GroupPage />}>
            <Route
              index
              element={
                <>
                  <AllGroupsPage />
                  <YourGroupsPage />
                </>
              }
            />
            <Route path="all-groups" element={<AllGroupsPage />} />
            <Route path="your-groups" element={<YourGroupsPage />} />
            <Route path="/Groups/create-group" element={<CreateGroup />} />
          </Route>

          <Route path="/membership" element={<MemberShipPage />} />
          <Route
            path="/halal-business-dirctory"
            element={<HalalBusinessPage />}
          >
            <Route
              index
              element={
                <>
                  <AdvertisePage />
                </>
              }
            />
            <Route path="advertise/:id?" element={<AdvertisePage />} />
            <Route path="apply-for-role" element={<ApplyForRolePage />} />
            <Route path="sell-products" element={<SellProductsPage />} />
          </Route>

          <Route path="/profilePage" element={<ProfilePage />}>
            <Route
              index
              element={
                <>
                  <ProfileSection />
                </>
              }
            />
            <Route path="profile-section" element={<ProfileSection />} />
            <Route
              path="your-advertisments"
              element={<ProfileAdvertisments />}
            />
            <Route path="yourlisting" element={<ProfileListing />} />
            <Route path="profile-payments" element={<ProfilePayments />} />
          </Route>

          <Route path="/ServicesPage" element={<ServicePage />}>
            <Route
              index
              element={
                <>
                  <OurProducts />
                </>
              }
            />
            <Route path="our-products" element={<OurProducts />} />
            <Route path="product-details/:id" element={<ProductDetails />} />
            <Route path="donations" element={<DonationPage />} />
            <Route path="baby-sitter" element={<BabySitterPage />} />
            <Route path="quran-tutor" element={<QuranTutor />} />
          </Route>
          <Route path="/events" element={<EventsPage />}>
            <Route
              index
              element={
                <>
                  <AllEvents />
                </>
              }
            />
            <Route path="all-Events" element={<AllEvents />} />
            <Route path="your-Events" element={<YourEvents />} />
            <Route path="create-event/:id?" element={<CreateEvent />} />
            <Route path="/events/:id" element={<EventDetails />} />
          </Route>
          <Route path="/group-details/:id" element={<GroupDetails />} />
          <Route path="/messages/user/:userId/:flag" element={<Messages />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/success-payment" element={<SuccessPage />} />
          <Route path="/failed-payment" element={<FailedPage />} />
          <Route path="*" element={<NotFoundLayout />} />
        </Routes>
         </Suspense>
      </LayoutWrapper>
    </BrowserRouter>
  );
}
