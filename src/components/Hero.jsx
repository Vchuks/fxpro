import React from "react";
import sub2 from "../assets/images/Subtract.png";
import sub from "../assets/images/Subtract (1).png";
import fx from "../assets/images/fx.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero xl:h-[690px] text-center flex justify-center">
      <div className="text-white relative pt-10 pb-4 md:pt-36 lg:pb-20 xl:pb-0 lg:pt-52">
        <div className="w-full lg:w-[650px] relative m-auto xxxl:w-2/4" data-aos="zoom-in-up" data-aos-duration="2000">
          <div className="text-center  leading-[1.2] font-['aristbold'] text-3xl md:text-[64px] w-90% max-[440px]:w-[80%] min-[530px]:w-[80%] md:w-[90%] m-auto lg:w-full xxxl:text-[120px]">
            
              {" "}
              Building <span className="text-plcorange">Traders</span>{" "}
              <div className="flex relative w-[18.2rem] md:w-[37.5rem] lg:w-[90%] m-auto">
              <span className="text-plcorange pr-3 lg:pr-4">Solutions </span> <span>with</span>
            <img
              src={fx}
              alt=""
              className="absolute right-0 bottom-3 md:right-6 lg:right-1 md:bottom-6 w-24 md:w-44 h-fit"
            />
            </div>
          </div>

          <p className="font-[gsemibold] md:text-2xl">
            Unlocking Your Trading Potential with FX-Pro
          </p>
        <Link to="/#join">

          <button className="w-[21rem] bg-plcorange p-2 md:p-3 rounded-lg font-[gmedium] text-white text-sm mt-4">
            Join Event
          </button>
          </Link>
          <div className=" absolute right-10 top-[10%] lg:flex">
            <img src={sub} className="w-5 md:w-12 lg:w-14" alt="" loading="lazy" />
          </div>
          <div className=" absolute left-10 top-[10%] lg:flex">
            <img src={sub2} className="w-5 md:w-[50px] lg:w-[52px]" alt="" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
