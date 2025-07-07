import AboveGradiantParent from '@/components/common/above-gradiant/AboveGradiant'
import GoBack from '@/components/common/GoBack/GoBack'
import Navigate from '@/components/common/navigator/Navigate'
import connectMuslimImg from '@/assets/imgs/connect.png';
import './Aboutus.css';
import Title from '@/components/common/title/Title';
import Describtion from '@/components/common/description/Describtion';
export default function Aboutus() {
    return (
        <>
            <AboveGradiantParent>
                <GoBack />

            </AboveGradiantParent>

            <Navigate home='Home' arg2='About Us' />
            <div className="AboutusContainer ">
                <div className="imgContainer">
                    <div className="imgGlowWrapper">
                        <img src={connectMuslimImg} alt="connect musliem community image" />
                    </div>

                </div>
                <div className="TitleDescContainer ">
                    <Title title="Who We Are ?" />
                    <Describtion desc='Lorem ipsum dolor sit amet consectetur. Viverra senectus purus sagittis diam. Consequat mi a pretium euismod. Eu suscipit convallis blandit nam et. Ut amet dignissim tincidunt ut curabitur. Praesent vel semper condimentum posuere at condimentum molestie duis. Nisl nibh maecenas et tortor diam. At aliquam eget adipiscing ultricies nascetur sit nisl.' />
                    <br />
                    <Describtion desc='Lorem ipsum dolor sit amet consectetur. Viverra senectus purus sagittis diam. Consequat mi a pretium euismod. Eu suscipit convallis blandit nam et. Ut amet dignissim tincidunt ut curabitur. Praesent vel semper condimentum posuere at condimentum molestie duis. Nisl nibh maecenas et tortor diam. At aliquam eget adipiscing ultricies nascetur sit nisl.' />
                    <br />
                    <Describtion desc='Lorem ipsum dolor sit amet consectetur. Viverra senectus purus sagittis diam. Consequat mi a pretium euismod. Eu suscipit convallis blandit nam et. Ut amet dignissim tincidunt ut curabitur. Praesent vel semper condimentum posuere at condimentum molestie duis. Nisl nibh maecenas et tortor diam. At aliquam eget adipiscing ultricies nascetur sit nisl.' />
                </div>
            </div>
        </>
    )
}
