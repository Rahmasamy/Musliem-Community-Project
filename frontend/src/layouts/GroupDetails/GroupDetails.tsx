
import { Link } from 'react-router-dom'
import viewMessage from '@/assets/icons/message.png'
import GroupDetailsImg from '@/assets/imgs/group-details.png'
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
                <h1 className='font-bold text-2xl mt-3'>
                    Group Members
                </h1>
                <p className='text-gray-500'>
                    20+ members
                </p>
                <div className="users p-2 ">
                    <div className="flex flex-wrap">
                        
                        <div className="w-[48%] bg-slate-100 p-3 flex justify-between items-center">
                           <div className="imgcontainer">
                            <img src="" alt="" />
                            <div className="p-2">
                                <h1>
                                    Eleanor Pena
                                </h1>
                                <p>
                                    Send Message
                                </p>
                            </div>
                           </div>
                        </div>
                         <div className="w-[48%] p-3 bg-slate-600">
                            hhhhh
                        </div>
                         <div className="w-[48%] p-3 bg-red-700">
                            hhhhh
                        </div>
                         <div className="w-[48%] p-3 bg-orange-300">
                            hhhhh
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}
