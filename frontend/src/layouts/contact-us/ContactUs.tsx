import AboveGradiantParent from '@/components/common/above-gradiant/AboveGradiant'
import GoBack from '@/components/common/GoBack/GoBack'
import Navigate from '@/components/common/navigator/Navigate'
import './contactus.css';
import RightAuthContainer from '@/components/common/RigtAuthContainer';
import AuthWrapper from '@/components/common/AuthWrapper';
import LeftAuthContainer from '@/components/common/LeftAuthContainer';
import RightAvatarContactUs from '@/features/contactus-form/RightAvatarContactUs';
import ContactUsForm from '@/features/contactus-form/ContactUsForm';

export default function ContactUs() {
    return (
        <>
            <AboveGradiantParent>
                <GoBack />

            </AboveGradiantParent>
            <Navigate home='Home' arg2='Terms & Conditions' />
            <AuthWrapper>
                
                <LeftAuthContainer>
                     <h2>
                        Get In Touch
                     </h2>
                    <ContactUsForm />
                </LeftAuthContainer>
                <RightAuthContainer>

                    <RightAvatarContactUs />
                </RightAuthContainer>
            </AuthWrapper>
        </>
    )
}
