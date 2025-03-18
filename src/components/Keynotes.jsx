import pic1 from "../assets/images/Image (2).png";
import pic2 from "../assets/images/Image (3).png";
import pic3 from "../assets/images/Image (4).png";
import pic4 from "../assets/images/Image (5).png";
import pic5 from "../assets/images/guest.png";

const Keynotes = () => {
  // row-start-2 md:row-start-1 md:row-end-2
  return (
    <div
      className="px-4 lg:px-14 py-5 md:py-10 lg:py-10 bg-[#FFFAF4]"
      id="keyspeaker"
    >
      <div className="w-20 h-2 rounded-2xl my-2 bg-plcorange"></div>
      <p className="text-plcblack font-['aristsemibold'] text-3xl lg:text-5xl xxxl:text-7xl">
        Keynotes <span className="text-plcorange">Speakers </span>
      </p>
      <p className="lg:w-[22rem] 2xl:w-1/4 text-lg xxxl:text-2xl font-['gmedium']">
        Meet the industry leaders shaping the future of trading.
      </p>
      <div className="grid md:auto-cols-fr grid-cols-1 md:grid-flow-col md:grid-rows-4 gap-2 md:gap-5 py-8 md:gap-y-9">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bg-[#FEE7C9] w-full p-3 md:p-6 lg:p-4 rounded-xl md:rounded-[32.91px] flex flex-col justify-between mt-4 md:mt-0 md:row-span-1 lg:row-span-2 md:col-span-1"
        >
          <p className="text-[#1C1A1A] pt-0 lg:pt-6 text-xl md:text-[19.97px] syne font-semibold">
            Nduka Ukpabi
          </p>
          <p className="text-[#1C1A1A] syne md:text-sm">
            Chief Executive Officer, Pluralcode Academy
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="md:col-start-2 md:col-span-1 md:row-span-1 lg:row-span-2 w-full h-[30rem] md:h-auto"
        >
          <img src={pic1} className="w-full h-full object-cover object-top  rounded-[32.91px]" loading="lazy" alt="" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bg-[#22205747] p-3 md:p-6 lg:p-4  rounded-xl md:rounded-[32.91px] flex flex-col justify-between  mt-6 md:mt-0 md:col-start-3 md:row-span-1 lg:row-span-2 w-full md:col-span-1"
        >
          <p className="text-[#1C1A1A] pt-0 lg:pt-6 text-xl md:text-[19.97px] syne font-semibold break-words">
            Oghenetega Kafene
          </p>
          <p className="w-full text-[#1C1A1A] syne md:text-sm">
            Regional Accounts Manager, Fx-pro
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="md:col-start-4 md:row-span-1 lg:row-span-2 md:col-span-1 w-full h-[30rem] md:h-auto"
        >
          <img src={pic2} className="w-full h-full object-cover object-top rounded-[32.91px]" loading="lazy" alt="" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bg-[#FEE7C9] p-3 md:p-6 lg:p-4  rounded-xl md:rounded-[32.91px] flex flex-col justify-between  mt-6 md:mt-0 md:col-start-1 lg:col-start-5 md:row-start-2 lg:row-start-2 lg:row-span-2  w-full"
        >
          <p className="text-[#1C1A1A] pt-0 lg:pt-6 text-xl md:text-[19.97px] syne font-semibold">
            Yemmie Olaleye
          </p>
          <p className="text-[#1C1A1A] syne md:text-xs">
            Business Development Manager Africa, FX-pro
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="md:col-start-2 lg:col-start-6 md:col-span-1 md:row-start-2 lg:row-start-2 lg:row-span-2 w-full h-[30rem] md:h-auto"
        >
          <img src={pic5} className="w-full h-full object-cover object-top rounded-[32.91px]" loading="lazy" alt="" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="md:row-start-2 lg:row-start-3 md:col-span-1 w-full md:row-span-1 lg:row-span-2 h-[30rem] md:h-auto"
        >
          <img src={pic3} className="w-full h-full object-cover object-top rounded-[32.91px]" loading="lazy" alt="" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bg-[#22205747] p-3 md:p-6 lg:p-4  rounded-xl md:rounded-[32.91px] flex flex-col justify-between mt-6 md:mt-0 row-start-7 md:row-start-2 lg:row-start-3 md:row-span-1 lg:row-span-2 w-full md:col-span-1 md:col-start-3 lg:col-start-4"
        >
          <p className="text-[#1C1A1A] pt-0 lg:pt-6 text-xl md:text-[19.97px] syne font-semibold">
            George owolabi
          </p>
          <p className="text-[#1C1A1A] syne md:text-xs">
            Financial Market Facilitator, Pluralcode Academy
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="md:col-start-1 lg:col-start-3 md:row-start-3 md:col-span-1 w-full md:row-span-1 lg:row-span-2 h-[30rem] md:h-auto"
        >
          <img src={pic4} className="w-full h-full object-cover object-top rounded-[32.91px] " loading="lazy" alt="" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="bg-[#FEE7C9] p-3 md:p-6 lg:p-4 mt-6 md:mt-0  rounded-xl md:rounded-[32.91px] flex flex-col w-full justify-between row-start-9 md:col-start-2 md:row-start-3 md:row-span-1 lg:row-span-2 md:col-span-1"
        >
          <p className="text-[#1C1A1A] pt-0 lg:pt-6 text-xl md:text-[19.97px] syne font-semibold">
            Chibueze Nwafor
          </p>
          <p className="text-[#1C1A1A] syne md:text-xs">
            Business Development Manager Africa, FX-pro
          </p>
        </div>
      </div>
    </div>
  );
};

export default Keynotes;
