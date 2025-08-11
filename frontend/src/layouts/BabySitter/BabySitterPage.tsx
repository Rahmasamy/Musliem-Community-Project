import ApplyServiceBtn from '@/components/common/ApplyService/ApplyServiceBtn'
import CenterHeading from '@/components/common/center-heading/CenterHeading'
import ListingBabysitterQuaranCard from '@/components/common/listing-babysitter-quran-card/ListingBabysitterQuaranCard'
import OrangeButton from '@/components/common/OrangeButton/OrangeButton'


export default function BabySitterPage() {
  return (
    <div className='w-full mx-auto'>
       <CenterHeading title='Babysitter'  desc={
           <>
             Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque elementum
            
             congue
              <br />
             interdum cras. At nisl in quisque erat ut.
           </>
         }/>
         <div className="w-[95%] flex items-center justify-end ">
                                        <ApplyServiceBtn title='Apply as BabySitter' />
                                    </div>
             <h1 className='font-bold text-lg p-3 ml-14'>
                                      Pick a Babysitter and Start Booking
                                    </h1>                       
          <ListingBabysitterQuaranCard />
            <div className="flex justify-center items-center">
          
            <OrangeButton title='Load More' />
            </div>
        
    </div>
  )
}
