
import { Link } from 'react-router-dom'
import viewMessage from '@/assets/icons/message.png'
import GroupDetailsImg from '@/assets/imgs/group-details.png'
import groupPerson1 from '@/assets/imgs/groupperson1.jpg'
import groupPerson2 from '@/assets/imgs/groupperson2.jpg'
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export default function GroupDetails() {
    return (
        <div className='p-4 w-full flex flex-col justify-center items-center gap-3'>
            <div className="p-3 w-full rounded flex justify-between items-center">
                <h1 className='font-bold text-2xl'>
                    Group Details
                </h1>
                <Link to='/Groups/create-group'
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow"
                >
                    View Messages
                    <img src={viewMessage} alt="view Message" />
                </Link>
            </div>
            <div className="flex bg-slate-100">
                <div className="w-full flex justify-center items-center">
                    <img src={GroupDetailsImg} alt="" className='h-72 max-w-96' />
                </div>
                <div className="p-2">
                    <h2 className='p-3 font-bold'>
                        Muslim American Society (MAS)
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Sed massa pretium
                        sed scelerisque elementum congue interdum cras. At nisl in quisque erat ut.
                    </p>
                </div>
            </div>
            <div className="w-full p-2 flex flex-col gap-4 justify-center">
                <h1 className='font-bold text-2xl mt-3 text-center'>
                    Group Members
                </h1>
                <p className='text-gray-500 text-center'>
                    20+ members
                </p>
                <div className="users p-2 ">
                    <div className="flex flex-wrap gap-2">

                        <div className="w-[48%] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-4">
                                <img
                                    src={groupPerson1}
                                    alt="Group Person 1"
                                    className="w-16 h-16 object-cover rounded-full border-2 border-white"
                                />

                                <div className="personDetails flex justify-between items-center w-full">
                                    <div className="person">
                                        <h1 className="text-lg font-semibold text-black">Eleanor Pena</h1>
                                        <p className="text-sm text-gray-500 cursor-pointer hover:text-orange transition-colors flex gap-2 items-center">
                                            <span>
                                                <IoChatbubbleEllipsesOutline />


                                            </span>
                                            Send Message
                                        </p>
                                    </div>
                                    <div className="personType text-amber-500">
                                        Admin
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="w-[48%] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-4">
                                <img
                                    src={groupPerson2}
                                    alt="Group Person 1"
                                    className="w-16 h-16 object-cover rounded-full border-2 border-white"
                                />

                                <div className="personDetails flex justify-between items-center w-full">
                                    <div className="person">
                                        <h1 className="text-lg font-semibold text-black">Eleanor Pena</h1>
                                        <p className="text-sm text-gray-500 cursor-pointer hover:text-orange transition-colors flex gap-2 items-center">
                                            <span>
                                                <IoChatbubbleEllipsesOutline />


                                            </span>
                                            Send Message
                                        </p>
                                    </div>
                                    <div className="personType text-amber-500">
                                        Admin
                                    </div>
                                </div>

                            </div>
                        </div>

                         <div className="w-[48%] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-4">
                                <img
                                    src={groupPerson2}
                                    alt="Group Person 1"
                                    className="w-16 h-16 object-cover rounded-full border-2 border-white"
                                />

                                <div className="personDetails flex justify-between items-center w-full">
                                    <div className="person">
                                        <h1 className="text-lg font-semibold text-black">Eleanor Pena</h1>
                                        <p className="text-sm text-gray-500 cursor-pointer hover:text-orange transition-colors flex gap-2 items-center">
                                            <span>
                                                <IoChatbubbleEllipsesOutline />


                                            </span>
                                            Send Message
                                        </p>
                                    </div>
                                    <div className="personType text-amber-500">
                                        Admin
                                    </div>
                                </div>

                            </div>
                        </div>
                         <div className="w-[48%] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex items-center gap-4">
                                <img
                                    src={groupPerson2}
                                    alt="Group Person 1"
                                    className="w-16 h-16 object-cover rounded-full border-2 border-white"
                                />

                                <div className="personDetails flex justify-between items-center w-full">
                                    <div className="person">
                                        <h1 className="text-lg font-semibold text-black">Eleanor Pena</h1>
                                        <p className="text-sm text-gray-500 cursor-pointer hover:text-orange transition-colors flex gap-2 items-center">
                                            <span>
                                                <IoChatbubbleEllipsesOutline />


                                            </span>
                                            Send Message
                                        </p>
                                    </div>
                                    <div className="personType text-amber-500">
                                        Admin
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>

                </div>
            </div>
            <div className="w-full flex justify-center items-center">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full shadow">
                    Load More
                </button>
            </div>
        </div>
    )
}
