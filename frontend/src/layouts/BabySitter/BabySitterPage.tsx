import CenterHeading from "@/components/common/center-heading/CenterHeading";
import ListingBabysitterQuaranCard from "@/components/common/listing-babysitter-quran-card/ListingBabysitterQuaranCard";

export default function BabySitterPage() {
  return (
    <div className="w-full mx-auto">
      <CenterHeading
        title="Services"
        desc={
          <>
            From babysitting and Quran tutoring to advertising, events, web
            development,
            <br />
            and community programs, we provide reliable services that empower
            individuals and strengthen communities.
          </>
        }
      />
      {/* <div className="w-[95%] flex items-center justify-end ">
                                        <ApplyServiceBtn title='Apply as BabySitter' />
                                    </div> */}
      <h1 className="font-bold text-lg p-3 ml-14">
        Pick Your Service and Start Booking!
      </h1>
      <ListingBabysitterQuaranCard />
    </div>
  );
}
