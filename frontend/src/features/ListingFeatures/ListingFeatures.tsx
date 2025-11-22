import CenterHeading from '@/components/common/center-heading/CenterHeading'
import ListingCard from '@/components/common/listing-card/ListingCard'
import OrangeButton from '@/components/common/OrangeButton/OrangeButton'
import { ProductProvider } from '@/context/productContext'
import { useNavigate } from 'react-router-dom'

export default function ListingFeatures() {
      const navigate =useNavigate()

  return (
    <div className='w-full flex flex-col items-center py-4'>
      <CenterHeading title='Our Listings' desc={
        <>
          Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed scelerisque elementum

          congue
          <br />
          interdum cras. At nisl in quisque erat ut.
        </>
      } />
      <div className="flex justify-between w-[95%] items-center mb-8">
        <ProductProvider>

          <ListingCard />
        </ProductProvider>
      </div>
     
    </div>
  )
}
