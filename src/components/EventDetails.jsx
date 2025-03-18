import curve from "../assets/images/curv.png";
import curve3 from "../assets/images/Vector 12.png";
import eventDetails from "../assets/images/eventdetails.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const EventDetails = () => {
  const [getD, setGetD] = useState(0);
  const [getH, setGetH] = useState(0);
  const [getM, setGetM] = useState(0);
  const [getS, setGetS] = useState(0);

  
  
    setInterval(() => {
        const countDownDate = new Date("April 5, 2025 10:00:00").getTime();
        const now = new Date().getTime();
        const getT =  countDownDate - now
        
        setGetD(Math.floor(getT / (1000 * 60 * 60 * 24)));
    
        setGetH(Math.floor((getT % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    
        setGetM(Math.floor((getT % (1000 * 60 * 60)) / (1000 * 60)));
        setGetS(Math.floor((getT % (1000 * 60)) / 1000));
    }, 1000);
   
  
 
  const details = [
    {
      id: 1,
      num: getD,
      title: "Days",
    },
    {
      id: 2,
      num: getH,
      title: "Hours",
    },
    {
      id: 3,
      num: getM,
      title: "Minutes",
    },
    {
      id: 4,
      num: getS,
      title: "Seconds",
    },
  ];
  return (
    <div className="bg-[#F0EFF3] px-4 lg:px-5 py-8 xl:py-0 " id="countdown">
      <div className="flex flex-col-reverse lg:flex-row gap-5  items-center lg:pt-10">
        <div className="w-full  " data-aos="fade-up" data-aos-duration="2000">
          <img src={eventDetails} alt="" loading="lazy" className="w-full " />
        </div>
        <div className="w-full pb-0 lg:pb-10 ">
          <div
            className="w-full ml-auto relative"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="hidden lg:block absolute w-[25px] -left-[6%] top-4 2xl:-left-10 xxxl:-top-2 xxxl:-left-[5%] xxxl:w-[60px] ">
              <img src={curve} alt="" className="w-full" loading="lazy" />
            </div>
            <p className="block bg-[#F8991D3D] rounded-[24px] w-fit px-2 text-plcorange text-xs pt-1 xxxl:text-3xl">
              Our <span className="font-[gmedium] font-sm">2025</span> Event
              Details
            </p>
            <p className=" text-[32px] md:text-[48px] w-full  2xl:w-[750px] 2xl:text-7xl xxxl:text-8xl leading-tight lg:leading-none pt-2 md:pt-6 text-plcblue">
              <span className="text-plcorange">Unlock </span>your{" "}
              <span className="text-plcorange"> trading </span>
              potential{" "}
            </p>
            <p className="font-[gregular] md:text-2xl">
              Visit the link below to register for the event.
            </p>
            <div className="pt-6 flex gap-2 md:gap-4">
              {details.map((each) => (
                <div
                  key={each.id}
                  className="bg-white rounded-lg flex flex-col items-center justify-center h-24 w-28"
                >
                  <p className="text-plcblue text-2xl font-[gextrabold]">
                    {each.num}
                  </p>
                  <p className="text-lg font-[aristlight]">{each.title}</p>
                </div>
              ))}
            </div>
            <Link to="/#join">
              <button className="relative max-[345px]:w-full w-[21rem] bg-plcorange p-2 md:p-3 rounded-lg font-[gmedium] text-white text-sm mt-8">
                View Event Details
            <div className="hidden md:block absolute w-[35px] left-[105%]  bottom-3">
              <img src={curve3} alt="" className="w-full" loading="lazy" />
            </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
