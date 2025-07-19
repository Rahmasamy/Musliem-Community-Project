import CenterHeading from '@/components/common/center-heading/CenterHeading'
import ListingCard from '@/components/common/listing-card/ListingCard'
import OrangeButton from '@/components/common/OrangeButton/OrangeButton'
import React from 'react'

export default function ListingFeatures() {
  return (
   <div className='w-full flex flex-col items-center'>
 <CenterHeading title='Our Listings'  desc={
     <>
       Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque elementum
      
       congue
        <br />
       interdum cras. At nisl in quisque erat ut.
     </>
   }/>
            <div className="flex justify-between w-[95%] items-center">
              <ListingCard/>
            </div>
        <OrangeButton title='Load More '/>
      </div>
  )
}
