
import CancelBtn from '../cancel-btn/CancelBtn'
import ConfirmBtn from '../confirm-btn/ConfirmBtn'
import { IoClose } from 'react-icons/io5'
import TryAgainPaymentBtn from '../confirm-payment/TryAgainPaymentBtn'

export default function CancelPayment({ onClose }: { onClose: () => void }) {
    return (
        <div className='fixed top-0 left-0 z-150 w-full h-full flex items-center justify-center '>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
            <div className="relative bg-white p-6 rounded-xl shadow-lg w-[90%] max-w-xl z-50">
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-teal-500 text-2xl"
                    onClick={onClose}
                >
                    <IoClose />
                </button>
                <div className="flex justify-center items-center flex-col gap-4">
                    <span>
                        <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.5 3.75C13.825 3.75 3.75 13.825 3.75 26.5C3.75 39.175 13.825 49.25 26.5 49.25C39.175 49.25 49.25 39.175 49.25 26.5C49.25 13.825 39.175 3.75 26.5 3.75ZM35.275 37.875L26.5 29.1L17.725 37.875L15.125 35.275L23.9 26.5L15.125 17.725L17.725 15.125L26.5 23.9L35.275 15.125L37.875 17.725L29.1 26.5L37.875 35.275L35.275 37.875Z" fill="#FF5E5E" />
                        </svg>


                    </span>
                    <h1 className='font-bold text-2xl p-2 mb-2'>
                        Payment Failed!
                    </h1>
                    <p className='text-center p-4'>
                       Something went wrong while processing your payment. 
                        <br />
                        <span className=''>
                            Please try again.
                        </span>

                    </p>
                     <div className="flex justify-center gap-4 mt-6">
                                                <CancelBtn onClick={onClose} />
                                                <TryAgainPaymentBtn />
                                            </div>
                </div>


            </div>
        </div>
    )
}
