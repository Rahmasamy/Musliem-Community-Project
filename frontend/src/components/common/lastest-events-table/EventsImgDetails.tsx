import React from 'react'
import EventImg from '@/assets/imgs/EventImg.png'
import { Link } from 'react-router-dom'
export default function EventsImgDetails() {
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
                2:00 PM - 5:00 PM
              </div>
            </div>
            <div>
              <div className="text-sm  px-2 py-1 inline-block rounded " style={{backgroundColor:"#1C7A80"}}>
                In-Person
              </div>
              <h3 className="text-lg font-semibold">
                <Link to={"/event-details"}>
                  A Workshop on Ethical Dealings in the Muslim Community
                </Link>
              
              </h3>
              <p className="text-sm text-gray-200">
                Dearborn Community Center, 123 Main St, Dearborn, MI 48126, USA
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
