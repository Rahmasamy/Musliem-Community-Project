import React from "react";
import OrangeButton from "../OrangeButton/OrangeButton";
import { useNavigate } from "react-router-dom";
import AdvertiseImg from "@/assets/imgs/AdvertisImg.png";
import { FcAdvertising } from "react-icons/fc";

export default function AdvertiseLeft() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3 bg-cover p-4 sm:p-6 flex flex-col justify-between text-white">
        <div>
          <h3 className="text-xs sm:text-sm mb-2 font-bold">
            Call the Owner to Advertise now!
          </h3>
          <div className="flex items-center justify-center border border-white px-3 sm:px-4 py-2 rounded-lg gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="w-4 h-4 sm:w-5 sm:h-5"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h1.586a1 1 0 01.707.293l1.414 1.414a1 1 0 00.707.293h4.172a1 1 0 00.707-.293l1.414-1.414A1 1 0 0117.414 3H19a2 2 0 012 2v2H3V5zM3 9h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
            </svg>
            <span className="text-xs sm:text-sm">{"+!(562) 584-3081"}</span>
          </div>
        </div>

        <div className="mt-6 sm:mt-10 text-center">
          <p className="text-sm sm:text-md mb-2 font-bold">Grow your business</p>
          <p className="text-xs mb-4">Let's Get Your Ad Up Here!</p>
          <OrangeButton
            title="Advertise"
            className="bergendy"
            onClick={() => navigate("/halal-business-dirctory/advertise")}
          />
        </div>
      </div>
      <div className="w-full lg:w-2/3 text-white p-4 sm:p-6 flex flex-col justify-between">
        <div>
          <div className="AdvertiveImgContainer flex justify-between items-center">
            <div className="flex items-center text-xs sm:text-sm gap-2 sm:gap-4 mb-2">
              <FcAdvertising fontSize={24} className="sm:w-8 sm:h-8" />

              <span>
                hello in Musliem Community website , here you can advertise your
                halal buisness to reach more customers
              </span>
            </div>
            
          </div>
        </div>

        <div className="mt-4">
          <img src={AdvertiseImg} alt="Ad" className="rounded-md w-full" />
        </div>
      </div>
    </div>
  );
}
