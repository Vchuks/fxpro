import curve from "../assets/images/curv.png";
import curve3 from "../assets/images/Vector 11.png";
import eventLogo from "../assets/images/eventlogo.png";
import fx from "../assets/images/fx.png";
import { useRef } from "react";
import { Link } from "react-router-dom";

const EventFX = () => {
  const eventref = useRef();
  const sanboxText = `Are you ready to elevate your trading skills and gain insights from industry experts? Join us for the <span class="font-[gextrabold]">FX Pro Event</span> where traders of all levels come together to learn, network, and grow.

Highlights of this event are the expert Speakers you get to Hear from,  renowned traders and market analysts who will share their strategies and insights. 

Interactive Workshops where you will Participate in hands-on sessions designed to enhance your trading techniques and Networking Opportunities where you will Connect with fellow traders and industry professionals to share experiences and forge valuable contacts. 

Over 100 scholarships are available to attendees who fund their wallet at the event ground to Earn a diploma in Financial Markets and gain 2 month’s internship afterwards.
`;
  return (
    <div className="bg-[#FFFAF4] px-4 lg:pl-14 lg:pr-0 py-8 xl:py-0 ">
      <div className="flex flex-col lg:flex-row  items-center lg:pt-10">
        <div className="w-full pb-4 lg:pb-10 ">
          <div
            className="w-full ml-auto relative"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="hidden lg:block absolute w-[35px] -left-[6%] top-6 2xl:-left-10 xxxl:-top-2 xxxl:-left-[5%] xxxl:w-[60px] ">
              <img src={curve} alt="" className="w-full" loading="lazy" />
            </div>
            <p className="block bg-[#F8991D3D] rounded-[24px] w-fit px-10 text-plcorange text-xs pt-1 xxxl:text-3xl">
              Welcome to
            </p>
            <div className="hero-text w-full  2xl:w-[750px] 2xl:text-7xl xxxl:text-8xl leading-tight lg:leading-none pt-2 md:pt-6 text-plcblue">
              <p className="lg:w-[40rem] xl:w-full">
                {" "}
                Pluralcode{" "}
                <span className="text-plcorange font-[gbold]">
                  2025{" "}
                </span>Event{" "}
              </p>
              <div className="flex relative w-[10rem] md:w-[20.5rem] lg:w-[19.5rem]">
                <span>with</span>
                <img
                  src={fx}
                  alt=""
                  className="absolute right-0 bottom-3 md:right-6 lg:right-1 md:bottom-7 lg:bottom-5 w-24 md:w-44 h-fit"
                />
              </div>
            </div>
            <pre
              dangerouslySetInnerHTML={{ __html: sanboxText }}
              className="md:py-4 w-full lg:w-[88%] text-sm md:text-base xxxl:text-[32px]"
              ref={eventref}
            />
            <Link to="/#join">
              <button className="max-[345px]:w-full w-[21rem] bg-plcorange p-2 md:p-3 rounded-lg font-[gmedium] text-white text-sm mt-4">
                Join Event
              </button>
            </Link>
            <div className="hidden lg:block absolute w-[35px] left-[50%] lg:left-[70%] xl:left-[50%] 2xl:left-[33%] xxxl:left-[28%] -bottom-2">
              <img src={curve3} alt="" className="w-full" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="w-full  " data-aos="fade-up" data-aos-duration="2000">
          <img src={eventLogo} alt="" loading="lazy" className="w-full " />
        </div>
      </div>
    </div>
  );
};

export default EventFX;
