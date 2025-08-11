import CenterHeading from '@/components/common/center-heading/CenterHeading'
import ListingCard from '@/components/common/listing-card/ListingCard'
import OrangeButton from '@/components/common/OrangeButton/OrangeButton'
import React from 'react'

export default function OurProducts() {
    return (
        <div className='w-full '>
            <CenterHeading title='Our Listings' />
            <div className="flex w-[100%] items-center">
                <ListingCard />
               


            </div>
           
            <div className="flex justify-center items-center w-full">
                <OrangeButton title='Load More ' />
            </div>

        </div>
    )
}
