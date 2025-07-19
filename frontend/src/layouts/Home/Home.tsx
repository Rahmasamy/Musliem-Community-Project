import LandingPage from '@/components/common/Landing-page/LandingPage'
import Navbar from '@/components/common/Navbar/Navbar'
import Advertise from '@/features/Advertise/Advertise'
import LatestEvents from '@/features/Latest-Events/LatestEvents'
import ListingFeatures from '@/features/ListingFeatures/ListingFeatures'
import OurGroups from '@/features/OurGroups/OurGroups'
import ServiceFeature from '@/features/serviceFeature/ServiceFeature'
import React from 'react'

export default function () {
  return (
    <>
       <LandingPage/>
       <ServiceFeature />
       <Advertise />
       <LatestEvents />
       <OurGroups/>
       <ListingFeatures/>
    </>
  )
}
