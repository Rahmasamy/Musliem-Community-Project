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
            <Navigate home='Home' arg2='Contact Us' />
            <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                <AuthWrapper>
                
                <LeftAuthContainer>
                     <h2 className='font-bold text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6'>
                        Get In Touch
                     </h2>
                    <ContactUsForm />
                </LeftAuthContainer>
                <RightAuthContainer>

                    <RightAvatarContactUs />
                </RightAuthContainer>
            </AuthWrapper>
            </div>
            
        </>
    )
}
