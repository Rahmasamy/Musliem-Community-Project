import RightAuthImgComponent from '@/components/common/RightAuthImgComponent/RightAuthImgComponent'
import './RightAvatar.css'
import AvatarImg from '@/assets/imgs/Avatarimg.png'
export default function RightAvatar() {
  return (
    <>
        <RightAuthImgComponent src={AvatarImg} alt='Register Image' className='registimg' />
    </>
  )
}
