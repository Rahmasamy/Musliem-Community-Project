import AboveGradiantParent from '@/components/common/above-gradiant/AboveGradiant'
import GoBack from '@/components/common/GoBack/GoBack'
import Navigate from '@/components/common/navigator/Navigate'
import connectMusliemCommunity from '@/assets/imgs/Connect-Musliem-Community.png';

export default function Aboutus() {
  return (
    <>
    <AboveGradiantParent>
        <GoBack/>
    
    </AboveGradiantParent>
       
        <Navigate home='home' arg2='About Us' />
        <img src={connectMusliemCommunity} alt="connect musliem community image"/>
    </>
  )
}
