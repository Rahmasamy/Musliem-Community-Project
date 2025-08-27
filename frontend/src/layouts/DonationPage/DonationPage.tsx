import ApplyServiceBtn from '@/components/common/ApplyService/ApplyServiceBtn'
import CenterHeading from '@/components/common/center-heading/CenterHeading'
import ListingDonateCard from '@/components/common/listing-donate-card/ListingDonateCard'
import OrangeButton from '@/components/common/OrangeButton/OrangeButton'
import React from 'react'

export default function DonationPage() {
    return (
        <div className='w-full mx-auto p-8'>
            <CenterHeading title='Donation' desc={
                <>
                    Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque elementum

                    congue
                    <br />
                    interdum cras. At nisl in quisque erat ut.
                </>
            } />
            {/* <div className=" flex items-center justify-end w-[95%]">
                <ApplyServiceBtn title='Add your Chairty' />
            </div> */}
            <div className="flex w-[95%] items-center gap-5 mb-2">
                <ListingDonateCard />
            </div>
            <div className="w-full flex justify-center items-center">
                <OrangeButton title='Load More ' />
            </div>

        </div>
    )
}
