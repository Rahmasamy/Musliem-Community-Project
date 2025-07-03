import RightAuthImgComponent from "@/components/common/RightAuthImgComponent/RightAuthImgComponent";
import './Verify.css'
import verifyImg from '@/assets/imgs/verifyImg.png'
export default function RightVerify() {
  return (
    <>
      <RightAuthImgComponent src={verifyImg} alt='Register Image' className='verifyimg' />
    </>
  )
}
