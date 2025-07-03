import RightAuthImgComponent from '@/components/common/RightAuthImgComponent/RightAuthImgComponent'
import resetImg from '@/assets/imgs/resetImg.png'
import './Reset.css'
export default function RightRest() {
  return (
    <>
      <RightAuthImgComponent src={resetImg} alt='Register Image' className='restimg' />
    </>
  )
}
