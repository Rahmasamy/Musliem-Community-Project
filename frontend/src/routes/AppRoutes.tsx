import Footer from '@/components/common/footer/Footer'
import Navbar from '@/components/common/Navbar/Navbar'
import Aboutus from '@/layouts/aboutus/Aboutus'
import AllGroupsPage from '@/layouts/AllGroupsPage/AllGroupsPage'
import ContactUs from '@/layouts/contact-us/ContactUs'
import CreateGroup from '@/layouts/createGroup/CreateGroup'
import EventsPage from '@/layouts/EventsPage/EventsPage'
import ForgetPassword from '@/layouts/forgetPassword/ForgetPassword'
import GroupDetails from '@/layouts/GroupDetails/GroupDetails'
import GroupPage from '@/layouts/GroupPage/GroupPage'
import HalalBusinessPage from '@/layouts/HalalBusinessDirctoryPage/HalalBusinessPage'
import Home from '@/layouts/Home/Home'
import Login from '@/layouts/login/Login'
import MemberShipPage from '@/layouts/MemberShip/MemberShipPage'
import MoreInfo from '@/layouts/MoreInfo/MoreInfo'
import NotFoundLayout from '@/layouts/not-foundpage/NotFoundLayout'
import PrivacyPolicy from '@/layouts/privacy-policy/PrivacyPolicy'
import Register from '@/layouts/register/Register'
import ResetPass from '@/layouts/reset-password/ResetPass'
import TermsAndConditions from '@/layouts/terms-conditions/TermsAndConditions'
import VerifyAccount from '@/layouts/verify/VerifyAccount'
import YourGroupsPage from '@/layouts/YourGroupsPage/YourGroupsPage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
          <Route path="create-group" element={<CreateGroup />} />
        </Route>
        <Route path="/membership" element={<MemberShipPage />} />
        <Route path="/halal-business-dirctory" element={<HalalBusinessPage />} />
        <Route path="/Events" element={<EventsPage />} />
        <Route path="/group-details" element={<GroupDetails />} />
        <Route path="*" element={<NotFoundLayout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


