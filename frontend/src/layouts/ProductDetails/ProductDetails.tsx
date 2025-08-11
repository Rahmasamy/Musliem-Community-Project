
import Labtop from '@/assets/imgs/labtop.png'
import EmblaCarousel from '@/features/Embla/EmblaCarousel';
export default function ProductDetails() {
  return (
    <div  className="w-full mx-auto p-6">
        <div className="flex w-[90%] justify-center ">
                <div className="w-1/2">
                    <img src={Labtop} alt="Labtop image" className='w-full h-full object-cover' />
                </div>
                <div className="w-1/2 p-4">
                    <h1 className='font-bold text-xl p-3'>
                        Labtop
                    </h1>
                    <p className='text-gray-500 p-3'>
                        Lorem ipsum dolor sit amet consectetur. Felis porttitor nunc volutpat ultricies quis leo.
                    </p>
                      <p className='text-gray-500 p-3'>
                        Lorem ipsum dolor sit amet consectetur. Felis porttitor nunc volutpat ultricies quis leo.
                    </p>
                      <p className='text-gray-500 p-3'>
                        Lorem ipsum dolor sit amet consectetur. Felis porttitor nunc volutpat ultricies quis leo.
                    </p>
                    <div>
                        $ <span className='font-bold'>
                            500
                        </span>
                    </div>
                    <p className='font-bold p-3' >
                        Call the owner
                    </p>
                    <div className="phone flex gap-3 items-center">
                        <span>
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.32888 16.671C6.17828 14.5163 4.52439 11.9177 3.48288 9.05702C2.90988 7.49302 3.43488 5.77502 4.61288 4.59702L5.34188 3.86902C5.53786 3.67264 5.77066 3.51684 6.02693 3.41053C6.28321 3.30423 6.55793 3.24951 6.83538 3.24951C7.11282 3.24951 7.38755 3.30423 7.64382 3.41053C7.9001 3.51684 8.13289 3.67264 8.32888 3.86902L10.0359 5.57602C10.2323 5.77201 10.3881 6.0048 10.4944 6.26108C10.6007 6.51735 10.6554 6.79208 10.6554 7.06952C10.6554 7.34697 10.6007 7.62169 10.4944 7.87797C10.3881 8.13424 10.2323 8.36704 10.0359 8.56302L9.61588 8.98302C9.44776 9.1511 9.3144 9.35065 9.22342 9.57028C9.13243 9.7899 9.0856 10.0253 9.0856 10.263C9.0856 10.5007 9.13243 10.7361 9.22342 10.9558C9.3144 11.1754 9.44776 11.3749 9.61588 11.543L13.4559 15.384C13.624 15.5521 13.8235 15.6855 14.0431 15.7765C14.2628 15.8675 14.4982 15.9143 14.7359 15.9143C14.9736 15.9143 15.209 15.8675 15.4286 15.7765C15.6482 15.6855 15.8478 15.5521 16.0159 15.384L16.4369 14.964C16.6329 14.7676 16.8657 14.6118 17.1219 14.5055C17.3782 14.3992 17.6529 14.3445 17.9304 14.3445C18.2078 14.3445 18.4825 14.3992 18.7388 14.5055C18.9951 14.6118 19.2279 14.7676 19.4239 14.964L21.1309 16.671C21.3273 16.867 21.4831 17.0998 21.5894 17.3561C21.6957 17.6124 21.7504 17.8871 21.7504 18.1645C21.7504 18.442 21.6957 18.7167 21.5894 18.973C21.4831 19.2292 21.3273 19.462 21.1309 19.658L20.4029 20.386C19.2249 21.565 17.5069 22.09 15.9429 21.517C13.0822 20.4755 10.4836 18.8216 8.32888 16.671Z" stroke="#0D929A" stroke-width="1.5" stroke-linejoin="round" />
                            </svg>

                        </span>
                        <p className=' text-sm font-semibold text-[#00ABB6]'>
                            (480) 555-0103
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-start mt-5">
                <h1 className='font-bold text-xl'>
                    Description
                </h1>
                <ul className='m-2 '>
                    <li className='flex items-center gap-2 pb-2'>
                        <span>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 25.75C14.6744 25.75 16.3323 25.4202 17.8792 24.7795C19.4261 24.1387 20.8317 23.1996 22.0156 22.0156C23.1996 20.8317 24.1387 19.4261 24.7795 17.8792C25.4202 16.3323 25.75 14.6744 25.75 13C25.75 11.3256 25.4202 9.66769 24.7795 8.12079C24.1387 6.57388 23.1996 5.16833 22.0156 3.98439C20.8317 2.80044 19.4261 1.86128 17.8792 1.22054C16.3323 0.579788 14.6744 0.25 13 0.25C9.61849 0.25 6.37548 1.5933 3.98439 3.98439C1.5933 6.37548 0.25 9.61849 0.25 13C0.25 16.3815 1.5933 19.6245 3.98439 22.0156C6.37548 24.4067 9.61849 25.75 13 25.75ZM12.6713 18.1567L19.7547 9.65667L17.5787 7.84333L11.487 15.1519L8.33492 11.9984L6.33175 14.0016L10.5817 18.2516L11.6783 19.3481L12.6713 18.1567Z" fill="#47B881" />
                            </svg>

                        </span>
                        Lorem ipsum dolor sit amet consectetur. Felis porttitor nunc volutpat ultricies quis leo.
                    </li>
                     <li className='flex items-center gap-2 pb-2'>
                        <span>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 25.75C14.6744 25.75 16.3323 25.4202 17.8792 24.7795C19.4261 24.1387 20.8317 23.1996 22.0156 22.0156C23.1996 20.8317 24.1387 19.4261 24.7795 17.8792C25.4202 16.3323 25.75 14.6744 25.75 13C25.75 11.3256 25.4202 9.66769 24.7795 8.12079C24.1387 6.57388 23.1996 5.16833 22.0156 3.98439C20.8317 2.80044 19.4261 1.86128 17.8792 1.22054C16.3323 0.579788 14.6744 0.25 13 0.25C9.61849 0.25 6.37548 1.5933 3.98439 3.98439C1.5933 6.37548 0.25 9.61849 0.25 13C0.25 16.3815 1.5933 19.6245 3.98439 22.0156C6.37548 24.4067 9.61849 25.75 13 25.75ZM12.6713 18.1567L19.7547 9.65667L17.5787 7.84333L11.487 15.1519L8.33492 11.9984L6.33175 14.0016L10.5817 18.2516L11.6783 19.3481L12.6713 18.1567Z" fill="#47B881" />
                            </svg>

                        </span>
                        Lorem ipsum dolor sit amet consectetur. Felis porttitor nunc volutpat ultricies quis leo.
                    </li>
                     <li className='flex items-center gap-2 pb-2'>
                        <span>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 25.75C14.6744 25.75 16.3323 25.4202 17.8792 24.7795C19.4261 24.1387 20.8317 23.1996 22.0156 22.0156C23.1996 20.8317 24.1387 19.4261 24.7795 17.8792C25.4202 16.3323 25.75 14.6744 25.75 13C25.75 11.3256 25.4202 9.66769 24.7795 8.12079C24.1387 6.57388 23.1996 5.16833 22.0156 3.98439C20.8317 2.80044 19.4261 1.86128 17.8792 1.22054C16.3323 0.579788 14.6744 0.25 13 0.25C9.61849 0.25 6.37548 1.5933 3.98439 3.98439C1.5933 6.37548 0.25 9.61849 0.25 13C0.25 16.3815 1.5933 19.6245 3.98439 22.0156C6.37548 24.4067 9.61849 25.75 13 25.75ZM12.6713 18.1567L19.7547 9.65667L17.5787 7.84333L11.487 15.1519L8.33492 11.9984L6.33175 14.0016L10.5817 18.2516L11.6783 19.3481L12.6713 18.1567Z" fill="#47B881" />
                            </svg>

                        </span>
                        Lorem ipsum dolor sit amet consectetur. Felis porttitor nunc volutpat ultricies quis leo.
                    </li>
                     <li className='flex items-center gap-2 pb-2'>
                        <span>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 25.75C14.6744 25.75 16.3323 25.4202 17.8792 24.7795C19.4261 24.1387 20.8317 23.1996 22.0156 22.0156C23.1996 20.8317 24.1387 19.4261 24.7795 17.8792C25.4202 16.3323 25.75 14.6744 25.75 13C25.75 11.3256 25.4202 9.66769 24.7795 8.12079C24.1387 6.57388 23.1996 5.16833 22.0156 3.98439C20.8317 2.80044 19.4261 1.86128 17.8792 1.22054C16.3323 0.579788 14.6744 0.25 13 0.25C9.61849 0.25 6.37548 1.5933 3.98439 3.98439C1.5933 6.37548 0.25 9.61849 0.25 13C0.25 16.3815 1.5933 19.6245 3.98439 22.0156C6.37548 24.4067 9.61849 25.75 13 25.75ZM12.6713 18.1567L19.7547 9.65667L17.5787 7.84333L11.487 15.1519L8.33492 11.9984L6.33175 14.0016L10.5817 18.2516L11.6783 19.3481L12.6713 18.1567Z" fill="#47B881" />
                            </svg>

                        </span>
                        Lorem ipsum dolor sit amet consectetur. Felis porttitor nunc volutpat ultricies quis leo.
                    </li>
                </ul>
            </div>
<div className="w-full mt-10">
  <h1 className='font-bold text-2xl mb-4'>More Product</h1>
  <EmblaCarousel />
</div>
          {/*slider */ }
          

    </div>
  )
}
