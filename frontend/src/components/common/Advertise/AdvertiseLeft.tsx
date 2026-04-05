import React from "react";
import OrangeButton from "../OrangeButton/OrangeButton";
import { useNavigate } from "react-router-dom";
import AdvertiseImg from "@/assets/imgs/AdvertisImg.png";

export default function AdvertiseLeft() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3 bg-cover p-4 sm:p-6 flex flex-col justify-center items-center text-white">
      

        <div className="mt-6 sm:mt-10 text-center flex flex-col gap-3">
          <p className="text-2xl sm:text-md mb-2 font-bold">Grow your business</p>
          <p className="text-xl mb-4">Let's Get Your Ad Up Here!</p>
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
