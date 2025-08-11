import OrangeButton from '@/components/common/OrangeButton/OrangeButton'
import EventImg from '@/assets/imgs/EventImg.png'

export default function EventDetails() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Event Details</h1>

            {/* Event Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Left Column */}
                <div>
                    <div className="bg-white shadow rounded-lg overflow-hidden">
                        <img
                            src={EventImg}
                            alt="Event"
                            className="w-full h-80 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="font-semibold text-lg">
                                A Workshop on Ethical Dealings in the Muslim Community
                            </h2>
                            <div className="flex items-center gap-2 mt-2 text-sm">
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                    Saturday, May 18, 2025
                                </span>
                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                    3:00 PM - 5:00 PM
                                </span>
                            </div>
                            <p className="mt-3 text-gray-500 flex items-center gap-2">
                                📍 Dearborn Community Center, 123 Main St, Dearborn, MI 48201, USA
                            </p>
                        </div>
                        <iframe
                            title="map"
                            src="https://www.google.com/maps/embed?..."
                            className="w-full h-48 border-0"
                            loading="lazy"
                        ></iframe>
                    </div>

                    
                </div>

                {/* Right Column */}
                <div>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed
                        scelerisque elementum congue eu pretium orci ac nisl quisque est
                        ut. Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed
                        scelerisque elementum congue eu pretium orci ac nisl quisque est
                        ut.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed
                        scelerisque elementum congue eu pretium orci ac nisl quisque est
                        ut.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed
                        scelerisque elementum congue eu pretium orci ac nisl quisque est
                        ut.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed
                        scelerisque elementum congue eu pretium orci ac nisl quisque est
                        ut.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed
                        scelerisque elementum congue eu pretium orci ac nisl quisque est
                        ut.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed
                        scelerisque elementum congue eu pretium orci ac nisl quisque est
                        ut.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed
                        scelerisque elementum congue eu pretium orci ac nisl quisque est
                        ut.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed
                        scelerisque elementum congue eu pretium orci ac nisl quisque est
                        ut.
                    </p>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet consectetur. Sed massa pretium sed
                        scelerisque elementum congue eu pretium orci ac nisl quisque est
                        ut.
                    </p>

                   
                </div>
              
            </div>
              {/* Stats */}
                    <div className="flex items-center justify-around bg-white shadow rounded-lg mt-4 p-4 text-center text-sm">
                        <div>
                            <p className="font-semibold">23</p>
                            <p className="text-gray-500">Attend</p>
                        </div>
                        <div>
                            <p className="font-semibold text-red-500">23</p>
                            <p className="text-gray-500">Not Interested</p>
                        </div>
                        <div>
                            <p className="font-semibold">$50</p>
                            <p className="text-gray-500">Donation</p>
                        </div>
                    </div>
                    <div className="p-3 flex items-center justify-end mt-3">
                         <OrangeButton title='Register Now' icon={<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.086 5.65692L7.136 1.70692C6.95384 1.51832 6.85305 1.26571 6.85533 1.00352C6.8576 0.741321 6.96277 0.490508 7.14818 0.3051C7.33359 0.119692 7.5844 0.0145233 7.8466 0.0122448C8.1088 0.00996641 8.3614 0.110761 8.55 0.292919L14.207 5.94992C14.3002 6.04257 14.3741 6.15273 14.4246 6.27407C14.4751 6.3954 14.501 6.52551 14.501 6.65692C14.501 6.78833 14.4751 6.91844 14.4246 7.03977C14.3741 7.16111 14.3002 7.27127 14.207 7.36392L8.55 13.0209C8.45775 13.1164 8.34741 13.1926 8.2254 13.245C8.1034 13.2974 7.97218 13.325 7.8394 13.3262C7.70662 13.3273 7.57494 13.302 7.45205 13.2517C7.32915 13.2015 7.2175 13.1272 7.12361 13.0333C7.02971 12.9394 6.95546 12.8278 6.90518 12.7049C6.8549 12.582 6.8296 12.4503 6.83075 12.3175C6.8319 12.1847 6.85949 12.0535 6.9119 11.9315C6.96431 11.8095 7.04049 11.6992 7.136 11.6069L11.086 7.65692H1.5C1.23478 7.65692 0.98043 7.55156 0.792893 7.36403C0.605357 7.17649 0.5 6.92214 0.5 6.65692C0.5 6.3917 0.605357 6.13735 0.792893 5.94981C0.98043 5.76228 1.23478 5.65692 1.5 5.65692H11.086Z" fill="white" />
                    </svg>
                    } />
                    </div>
                    
        </div>
    )
}
