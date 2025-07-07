import Aboutus from '@/layouts/aboutus/Aboutus'
import ContactUs from '@/layouts/contact-us/ContactUs'
import ForgetPassword from '@/layouts/forgetPassword/ForgetPassword'
import Login from '@/layouts/login/Login'
import MoreInfo from '@/layouts/MoreInfo/MoreInfo'
import NotFoundLayout from '@/layouts/not-foundpage/NotFoundLayout'
import PrivacyPolicy from '@/layouts/privacy-policy/PrivacyPolicy'
import Register from '@/layouts/register/Register'
import ResetPass from '@/layouts/reset-password/ResetPass'
import TermsAndConditions from '@/layouts/terms-conditions/TermsAndConditions'
import VerifyAccount from '@/layouts/verify/VerifyAccount'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
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
        <Route path="*" element={<NotFoundLayout />} />
      </Routes>
    </BrowserRouter>
  )
}
