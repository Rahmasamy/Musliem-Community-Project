import React from 'react'
import EventImg from '@/assets/imgs/EventImg.png'
import { Link } from 'react-router-dom'
import { useEvents } from '@/context/eventContext';
export default function EventsImgDetails() {
   const { events } = useEvents();
    const firstEvent = events[0];

  if (!firstEvent) return null;
  return (
    <div className='w-[45%]'>
          {/* Right Side: Featured Event Card */}
      <div className="">
        <div className=" rounded-lg overflow-hidden text-white relative
        
        ">
          <img src={EventImg} alt="Event" className="w-full h-96 object-cover"  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-evenly">
            <div className="flex justify-start items-center gap-2">
              <div className="text-xs  px-2 py-1 rounded text-white"
              style={{backgroundColor:"#1C7A80"}}
              >
                Saturday, May 10, 2025
              </div>
              <div className="text-xs px-2 py-1 rounded text-white"
              style={{backgroundColor:"#1C7A80"}}
              >
                {firstEvent.startTime} - {firstEvent.endTime}
              </div>
            </div>
            <div>
              <div className="text-sm  px-2 py-1 inline-block rounded " style={{backgroundColor:"#1C7A80"}}>
                {firstEvent.eventType}
              </div>
              <h3 className="text-lg font-semibold">
                <Link to={"/event-details"}>
                 {firstEvent.name}
                </Link>
              
              </h3>
              <p className="text-sm text-gray-200">
               {firstEvent.description}
              </p>
              <button className="mt-4 bg-orange-400 text-white font-medium py-2 px-4 rounded-full text-sm hover:bg-orange-500 transition">
                Register Now →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
