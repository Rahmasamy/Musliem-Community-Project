import AboveGradiantParent from "@/components/common/above-gradiant/AboveGradiant";
import GoBack from "@/components/common/GoBack/GoBack";
import Navigate from "@/components/common/navigator/Navigate";
import connectMuslimImg from "@/assets/imgs/connect.png";
import "./Aboutus.css";
import Title from "@/components/common/title/Title";
import Describtion from "@/components/common/description/Describtion";

export default function Aboutus() {
  return (
    <>
      <AboveGradiantParent>
        <GoBack />
      </AboveGradiantParent>

      {/* <Navigate home="Home" arg2="About Us" /> */}

      {/* WHO WE ARE SECTION */}
      <div className="w-full py-16 px-6 md:px-10 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE WITH GLOW */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-teal-300/30 blur-3xl rounded-full group-hover:bg-teal-400/40 transition-all duration-500"></div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src={connectMuslimImg}
                alt="connect muslim community image"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="space-y-6">
            <Title title="Who We Are ?" />

            <h1 className="text-gray-600 text-lg md:text-xl leading-relaxed font-medium">
              Crescent Hub is a digital platform designed to connect, empower, and uplift
              Muslims across the United States. We believe in building stronger communities
              through a sense of belonging, shared values, and easy access to support,
              opportunities, and trusted services. Our platform brings together individuals,
              businesses, nonprofits, and community organizations into one modern,
              user-friendly hub where members can:
            </h1>

            <div className="space-y-3 text-gray-700 text-base">
              <Describtion desc="• Join meaningful groups and discussions." />
              <Describtion desc="• Discover local events and services." />
              <Describtion desc="• Connect with Muslim-owned businesses." />
              <Describtion desc="• Explore job opportunities." />
              <Describtion desc="• Promote fundraisers and initiatives." />
              <Describtion desc="• Sell and buy products and offer services." />
              <Describtion desc="• Access spiritual guidance and community resources." />
            </div>
          </div>
        </div>
      </div>

      {/* OUR MISSION SECTION */}
      <div className="w-full flex items-center justify-center">

      <div className="w-[80%] bg-gradient-to-br from-teal-600/90 via-teal-700 to-orange-600/70 text-white rounded-3xl p-10 md:p-14 shadow-2xl my-16 relative overflow-hidden ">
        
        {/* Glow Orbs */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-orange-400/40 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-teal-300/40 blur-3xl rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Our Mission
          </h2>

          <p className="text-lg md:text-xl leading-relaxed font-light text-teal-100">
            Our mission is to strengthen{" "}
            <span className="text-orange-300 font-semibold">
              Muslim life in America
            </span>{" "}
            by bridging people, services, and opportunities. We aim to be the
            central digital space where Muslims can grow
            <span className="text-orange-300 font-semibold">
              {" "}socially, professionally,
            </span>{" "}
            and
            <span className="text-orange-300 font-semibold">
              {" "}spiritually
            </span>{" "}
            —while supporting one another.
          </p>

          <p className="text-lg md:text-xl leading-relaxed font-light text-teal-100">
            Crescent Hub is committed to
            <span className="text-orange-300 font-semibold"> inclusivity</span>,
            <span className="text-orange-300 font-semibold"> trust</span>, and
            <span className="text-orange-300 font-semibold"> authenticity</span>.
            We are more than a platform; we are a 
            <span className="text-orange-300 font-semibold"> community built by Muslims, for Muslims</span>.
          </p>

          <button className="mt-6 px-8 py-3 bg-orange-400 hover:bg-orange-500 text-white font-semibold rounded-full shadow-lg transition-transform hover:scale-105">
            Join the Community
          </button>
        </div>
      </div>
      </div>
    </>
  );
}
