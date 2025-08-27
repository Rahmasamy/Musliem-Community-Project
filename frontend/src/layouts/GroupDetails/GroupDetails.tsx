
import { Link, useParams } from 'react-router-dom'
import viewMessage from '@/assets/icons/message.png'
import groupPerson1 from '@/assets/imgs/groupperson1.jpg';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { useEffect, useState } from 'react'
import axiosInstance from '@/utils/axiosInstance'
import { Group } from '@/utils/context-interface/groupInterface'
import { useAuthStore } from '@/store/authStore';

export default function GroupDetails() {
     const { id } = useParams();
      
   const [group, setGroup] = useState<Group>();
   const AuthState = useAuthStore();
   console.log("Auth stores user",AuthState.user?._id)
   const userId = AuthState.user?._id;
   useEffect(() => {
    const fetchGroup = async () => {
      try {
        const res = await axiosInstance.get(`groups/${id}`);
        setGroup(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    if (id) {
      fetchGroup();
    }
  }, [id]);

  if (!group) return <p>Loading...</p>;





    return (
        <>
            <div className='p-4 w-full flex flex-col justify-center items-center gap-3'>
                <div className="p-3 w-full rounded flex justify-between items-center">
                    <h1 className='font-bold text-2xl'>
                        Group Details
                    </h1>
                    <Link
                        to={`/messages/user/${userId}/true`}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2 shadow"
                    >
                        View Messages
                        <img src={viewMessage} alt="view Message" />
                    </Link>
                </div>
                <div className="flex bg-slate-100">
                    <div className="w-full flex justify-center items-center">
                        <img src={group.image} alt="" className='h-72 max-w-96' />
                    </div>
                    <div className="p-2">
                        <h2 className='p-3 font-bold'>
                            {group.name}
                        </h2>
                        <p>
                            {group.description.length > 500 ? `${group.description.slice(0,500)}` : group.description}
                        </p>
                    </div>
                </div>
                <div className="w-full p-2 flex flex-col gap-4 justify-center">
                    <h1 className='font-bold text-2xl mt-3 text-center'>
                        Group Members
                    </h1>
                    <p className='text-gray-500 text-center'>
                        {group.members.length} members
                    </p>
                    <div className="users p-2 ">
                        <div className="flex flex-wrap gap-2">
                            {
                                group.members.map((member,index) => (

                            <div className="w-[48%] p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" key={index}>
                                <div className="flex items-center gap-4">
                                    <img
                                        src={member.user?.photo || groupPerson1}
                                        alt="Group Person 1"
                                        className="w-16 h-16 object-cover rounded-full border-2 border-white"
                                    />

                                    <div className="personDetails flex justify-between items-center w-full">
                                        <div className="person">
                                            <h1 className="text-lg font-semibold text-black">{member.user?.fullName || "Unknown User"}</h1>
                                            <p className="text-sm text-gray-500 cursor-pointer hover:text-orange transition-colors flex gap-2 items-center">
                                                <span>
                                                    <IoChatbubbleEllipsesOutline />


                                                </span>
                                                Send Message
                                            </p>
                                        </div>
                                        <div className="personType text-amber-500">
                                            {member.role}
                                        </div>
                                    </div>

                                </div>
                            </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full shadow">
                        Load More
                    </button>
                </div>
            </div>
        </>
    )
}
