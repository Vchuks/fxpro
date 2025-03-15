import { Link } from "react-router-dom";
import plclogo from "../assets/images/PluralCode 4.png";
import menu from "../assets/images/icon.png";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  const handleClick = () => {
    setNav(false)
  }
  return (
    <>
      <div className="bg-plcblue flex justify-between items-center  px-4 lg:px-14 py-2 md:py-4 lg:py-8 ">
        <div className="w-full lg:w-2/4">
          <Link to="/" className="">
            <img
              src={plclogo}
              alt="Pluralcode"
              className="w-52 xxxl:w-64"
              loading="lazy"
            />
          </Link>
        </div>
        <div className="w-full hidden lg:flex gap-8 xl:gap-10 justify-center">
          <Link to="/#attend" onClick={handleClick} className="text-white font-[aristsemibold]">
            Why Attend?
          </Link>
          <Link to="/#keyspeaker" onClick={handleClick} className="text-white font-[aristsemibold]">
            Keynote Speakers
          </Link>
          <Link to="/#countdown" onClick={handleClick} className="text-white font-[aristsemibold]">
            Event Countdown
          </Link>
        </div>
        <div className="hidden lg:block lg:w-[18rem] xl:w-[24rem]">
          <Link to="/#join">
            <button className=" lg:w-[14rem] xl:w-[18rem] bg-plcorange p-2 md:p-3 rounded-lg font-[gmedium] text-white text-sm">
              Join Event
            </button>
          </Link>
        </div>
        <img
          src={menu}
          onClick={handleNav}
          alt=""
          className="block lg:hidden w-10 h-fit"
        />
      </div>
      {nav && (
        <div className="bg-plcblue p-4">
          <div className="w-full flex flex-col  gap-4 justify-center">
            <Link to="/#attend" onClick={handleClick} className="text-white font-[aristsemibold]">
              Why Attend?
            </Link>
            <Link to="/#keyspeaker" onClick={handleClick} className="text-white font-[aristsemibold]">
              Keynote Speakers
            </Link>
            <Link to="/#countdown" onClick={handleClick} className="text-white font-[aristsemibold]">
              Event Countdown
            </Link>
          </div>
          <div className="">
            <Link to="/#join">
              <button className="w-44 bg-plcorange p-2 md:p-3 rounded-lg font-[gmedium] text-white text-sm mt-4">
                Join Event
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
