import LandingPage from "@/components/common/Landing-page/LandingPage";
import Navbar from "@/components/common/Navbar/Navbar";
import { VisitContext } from "@/context/dashboard-context";
import Advertise from "@/features/Advertise/Advertise";
import LatestEvents from "@/features/Latest-Events/LatestEvents";
import ListingFeatures from "@/features/ListingFeatures/ListingFeatures";
import OurGroups from "@/features/OurGroups/OurGroups";
import ServiceFeature from "@/features/serviceFeature/ServiceFeature";
import { addHomeVisit } from "@/services/dashboard-anayltics.service";
import React, { useContext, useEffect } from "react";

export default function Home() {
  const { visits, setVisits } = useContext(VisitContext);

  useEffect(() => {
    const recordVisit = async () => {
      const data = await addHomeVisit();
      setVisits(data);
    };
    recordVisit();
  }, [setVisits]);
  useEffect(() => {
  }, [visits]);

  return (
    <>
      <LandingPage />

      <ServiceFeature />
      <Advertise />
      <div className="p-6">
        <LatestEvents />
        <OurGroups />
        <ListingFeatures />
      </div>
    </>
  );
}
