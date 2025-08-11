
import CancelBtn from '../cancel-btn/CancelBtn'
import ConfirmBtn from '../confirm-btn/ConfirmBtn'
import { IoClose } from 'react-icons/io5'

export default function ConfirmPopup({ onClose }: { onClose: () => void }) {
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
                        <svg width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.5 3.25C32.5337 3.25 38.3202 5.64687 42.5867 9.91332C46.8531 14.1798 49.25 19.9663 49.25 26C49.25 32.0337 46.8531 37.8202 42.5867 42.0867C38.3202 46.3531 32.5337 48.75 26.5 48.75C20.4663 48.75 14.6798 46.3531 10.4133 42.0867C6.14687 37.8202 3.75 32.0337 3.75 26C3.75 19.9663 6.14687 14.1798 10.4133 9.91332C14.6798 5.64687 20.4663 3.25 26.5 3.25ZM23.666 30.4882L18.6122 25.4312C18.4311 25.2501 18.216 25.1064 17.9793 25.0083C17.7426 24.9103 17.4888 24.8598 17.2326 24.8598C16.9764 24.8598 16.7227 24.9103 16.486 25.0083C16.2493 25.1064 16.0342 25.2501 15.853 25.4312C15.4871 25.7971 15.2815 26.2934 15.2815 26.8109C15.2815 27.3283 15.4871 27.8246 15.853 28.1905L22.288 34.6255C22.4687 34.8076 22.6836 34.9521 22.9204 35.0508C23.1571 35.1494 23.4111 35.2002 23.6676 35.2002C23.9241 35.2002 24.1781 35.1494 24.4149 35.0508C24.6517 34.9521 24.8666 34.8076 25.0473 34.6255L38.3722 21.2973C38.5558 21.1168 38.7019 20.9018 38.802 20.6647C38.9021 20.4275 38.9542 20.1729 38.9554 19.9155C38.9566 19.6581 38.9069 19.403 38.809 19.1649C38.7111 18.9268 38.567 18.7105 38.3851 18.5284C38.2032 18.3463 37.987 18.202 37.7491 18.1038C37.5111 18.0056 37.2561 17.9556 36.9987 17.9564C36.7413 17.9573 36.4866 18.0092 36.2493 18.109C36.0121 18.2088 35.7969 18.3546 35.6163 18.538L23.666 30.4882Z" fill="#0D929A" />
                        </svg>

                    </span>
                    <h1 className='font-bold text-2xl p-2 mb-2'>
                        Payment Successful!
                    </h1>
                    <p className='text-center p-4'>
                        Thank you! Your payment has been processed successfully.
                        <br />
                        <span className=''>
 You're all set.
                        </span>
                       
                    </p>
                </div>


            </div>
        </div>
    )
}
