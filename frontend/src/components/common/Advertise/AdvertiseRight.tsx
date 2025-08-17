import AdvertiseImg from '@/assets/imgs/AdvertisImg.png';
import { useAdvertisement } from '@/context/advertismentContext';
export default function AdvertiseRight() {
    const { ad } = useAdvertisement();
  
  return (
     <div className="w-2/3 text-white p-6 flex flex-col justify-between">
    
    <div>
      <h2 className="text-xl font-bold mb-2">Business Name goes here {ad?.name}</h2>
      <div className="AdvertiveImgContainer flex justify-between items-center">

      <div className="flex items-center text-sm gap-2 mb-2">
        <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2"
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0L6.343 16.657m11.314 0L13.414 20.9m0-4.243l4.243-4.243M12 12v.01" />
        </svg>
        <span>{ad?.description}</span>
      </div>
      <div className="flex items-center text-sm gap-2">
        <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2"
          viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round"
            d="M12 8v4l3 3M12 2a10 10 0 100 20 10 10 0 000-20z" />
        </svg>
        <span>Start: {ad?.extraDetails.openDate}</span>
      </div>
      </div>
    </div>

  
    <div className="mt-4">
      <img src={AdvertiseImg} alt="Ad" className="rounded-md w-full" />
    </div>
  </div>
  )
}
