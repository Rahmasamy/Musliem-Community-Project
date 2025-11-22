import CenterHeading from '@/components/common/center-heading/CenterHeading'
import ListingCard from '@/components/common/listing-card/ListingCard'
import { ProductProvider } from '@/context/productContext'

export default function OurProducts() {
    return (
        <div className='w-full '>
            <CenterHeading title='Our Listings' />
            <div className="flex w-[100%] items-center">
                 <ProductProvider>

                <ListingCard />
                 </ProductProvider>
               


            </div>
           
           

        </div>
    )
}
