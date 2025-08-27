import Footer from '@/components/common/footer/Footer'
import Navbar from '@/components/common/Navbar/Navbar'
import Aboutus from '@/layouts/aboutus/Aboutus'
import AllGroupsPage from '@/layouts/AllGroupsPage/AllGroupsPage'
import ContactUs from '@/layouts/contact-us/ContactUs'
import CreateGroup from '@/layouts/createGroup/CreateGroup'

import ForgetPassword from '@/layouts/forgetPassword/ForgetPassword'
import GroupDetails from '@/layouts/GroupDetails/GroupDetails'
import GroupPage from '@/layouts/GroupPage/GroupPage'
import HalalBusinessPage from '@/layouts/HalalBusinessDirctoryPage/HalalBusinessPage'
import Home from '@/layouts/Home/Home'
import Login from '@/layouts/login/Login'
import MemberShipPage from '@/layouts/MemberShip/MemberShipPage'
import Messages from '@/layouts/messages/Messages'
import MoreInfo from '@/layouts/MoreInfo/MoreInfo'
import NotFoundLayout from '@/layouts/not-foundpage/NotFoundLayout'
import PrivacyPolicy from '@/layouts/privacy-policy/PrivacyPolicy'
import Register from '@/layouts/register/Register'
import ResetPass from '@/layouts/reset-password/ResetPass'
import TermsAndConditions from '@/layouts/terms-conditions/TermsAndConditions'
import VerifyAccount from '@/layouts/verify/VerifyAccount'
import YourGroupsPage from '@/layouts/YourGroupsPage/YourGroupsPage'
import AdvertisePage from '@/layouts/advertisePage/AdvertisePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ApplyForRolePage from '@/layouts/apply-for-role-page/ApplyForRolePage'
import SellProductsPage from '@/layouts/sell-products-page/SellProductsPage'
import ProfilePage from '@/layouts/ProfilePage/ProfilePage'
import ProfileSection from '@/layouts/ProfleSection/ProfileSection'
import ProfileAdvertisments from '@/layouts/ProfileAdvertisments/ProfileAdvertisments'
import ProfileListing from '@/layouts/ProfileListing/ProfileListing'
import ProfilePayments from '@/layouts/ProfilePayments/ProfilePayments'
import ServicePage from '@/layouts/ServicePage/ServicePage'
import OurProducts from '@/layouts/ourProducts/OurProducts'
import DonationPage from '@/layouts/DonationPage/DonationPage'
import BabySitterPage from '@/layouts/BabySitter/BabySitterPage'
import QuranTutor from '@/layouts/QuranTutor/QuranTutor'
import ProductDetails from '@/layouts/ProductDetails/ProductDetails'
import AllEvents from '@/features/contactus-form/All-Events/AllEvents'
import YourEvents from '@/features/MoreInfo/YourEvents/YourEvents'
import CreateEvent from '@/layouts/apply-for-role-page/createEvents/CreateEvent'
import EventsPage from '@/layouts/apply-for-role-page/EventsPage/EventsPage'
import EventDetails from '@/layouts/EventDetails/EventDetails'
import PaymentPage from '@/layouts/paymentPage/PaymentPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/more-info" element={<MoreInfo />} />
        <Route path="forget-pass" element={<ForgetPassword />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
        <Route path="/verify-pass" element={<VerifyAccount />} />
        <Route path="/reset-password" element={<ResetPass />} />
        <Route path="/Groups" element={<GroupPage />} >
          <Route index element={
            <>
              <AllGroupsPage />
              <YourGroupsPage />
            </>
          } />
          <Route path="all-groups" element={<AllGroupsPage />} />
          <Route path="your-groups" element={<YourGroupsPage />} />
          <Route path="/Groups/create-group" element={<CreateGroup />} />
        </Route>

        <Route path="/membership" element={<MemberShipPage />} />
        <Route path="/halal-business-dirctory" element={<HalalBusinessPage />} >
          <Route index element={
            <>
              <AdvertisePage />

            </>
          } />
          <Route path="advertise" element={<AdvertisePage />} />
          <Route path="apply-for-role" element={<ApplyForRolePage />} />
          <Route path="sell-products" element={<SellProductsPage />} />
        </Route>

        <Route path="/profilePage" element={<ProfilePage />} >
          <Route index element={
            <>
              <ProfileSection />

            </>
          } />
          <Route path="profile-section" element={<ProfileSection />} />
          <Route path="your-advertisments" element={<ProfileAdvertisments />} />
          <Route path="yourlisting" element={<ProfileListing />} />
          <Route path="profile-payments" element={<ProfilePayments />} />
        </Route>

        <Route path="/ServicesPage" element={<ServicePage />} >
          <Route index element={
            <>
              <OurProducts />

            </>
          } />
          <Route path="our-products" element={<OurProducts />} />
          <Route path="product-details" element={<ProductDetails />} />
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
          <Route path="create-event" element={<CreateEvent />} />
          <Route path='/events/:id' element={<EventDetails />} />
        </Route>
        <Route path="/group-details/:id" element={<GroupDetails />} />
        <Route path='/messages/user/:userId/:flag' element={<Messages />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path="*" element={<NotFoundLayout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


