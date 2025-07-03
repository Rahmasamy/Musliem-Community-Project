import ForgetPassword from '@/layouts/forgetPassword/ForgetPassword'
import Login from '@/layouts/login/Login'
import MoreInfo from '@/layouts/MoreInfo/MoreInfo'
import Register from '@/layouts/register/Register'
import ResetPass from '@/layouts/reset-password/ResetPass'
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
        <Route path="/verify-pass" element={<VerifyAccount />} />
         <Route path="/reset-password" element={<ResetPass />} />
      </Routes>
    </BrowserRouter>
  )
}
