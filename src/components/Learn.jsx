import pic1 from "../assets/images/Frame 5133.png";
import pic2 from "../assets/images/Frame 5135.png";
import pic3 from "../assets/images/image 96.png";
import pic4 from "../assets/images/image (1).png";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <div className="bg-[#FFFAF4] px-4 lg:px-14 py-8 md:py-14 xl:py-20">
      <p className="text-center text-3xl pb-8 md:text-5xl text-plcblue font-[aristbold]">
        Learn Trading with Pluralcode Using FX-Pro
      </p>
      <div className="bg-white lg:p-2 flex flex-col lg:flex-row gap-2">
        <div className="w-full flex flex-col justify-center items-center bg-[#F8991D33] interFont md:w-[35rem] md:m-auto lg:w-full lg:m-0 h-[23rem] md:h-[40rem] lg:h-auto">
          <p className="text-[50px]">4</p>
          <p className="text-[26px]">Topics</p>
        </div>
        <div className="w-full md:h-[40rem] lg:h-auto" data-aos="zoom-in"
            data-aos-duration="2000">
          <img
            src={pic1}
            className="w-full md:h-full lg:h-auto object-contain"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center bg-[#F8991D33] interFont md:w-[35rem] md:m-auto lg:w-full lg:m-0 h-[23rem] md:h-[40rem] lg:h-auto">
          <p className="text-[50px]">6</p>
          <p className="text-[26px]">Speakers</p>
        </div>
        <div className="w-full md:h-[40rem] lg:h-auto" data-aos="zoom-in"
            data-aos-duration="2000">
          <img src={pic2} className="w-full md:h-full object-contain" alt="" loading="lazy" />
        </div>
      </div>
      <div className="bg-white lg:p-2 mt-2 lg:mt-0 lg:pt-0 flex flex-col lg:flex-row gap-2">
        <div className="w-full md:w-[35rem] md:m-auto lg:w-full lg:m-0  h-[23rem] md:h-[40rem] lg:h-auto" data-aos="zoom-in"
            data-aos-duration="2000">
          <img
            src={pic3}
            className="w-full h-full lg:h-auto object-cover"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center bg-[#22205712] interFont md:w-[35rem] md:m-auto lg:w-[70%] lg:m-0 h-[23rem] md:h-[40rem] lg:h-auto">
          <p className="text-[50px]">2000+</p>
          <p className="text-[26px]">Audience</p>
        </div>
        <div className="w-full md:w-[35rem] md:m-auto lg:w-full lg:m-0 h-[23rem] md:h-[40rem] lg:h-auto" data-aos="zoom-in"
            data-aos-duration="2000">
          <img
            src={pic4}
            className="w-full h-full object-cover object-left"
            alt=""
            loading="lazy"
          />
        </div>
      </div>
      <div className="flex justify-center">
      <Link to="/#join">

      <button className="w-[21rem] bg-plcorange p-2 md:p-3 rounded-lg font-[gmedium] text-white text-sm mt-10 md:mt-16">
              Join Event
            </button>
            </Link>
      </div>
    </div>
  );
};

export default Learn;
