import pic1 from "../assets/images/Image (2).png";
import pic2 from "../assets/images/Image (3).png";
import pic3 from "../assets/images/Image (4).png";
import pic4 from "../assets/images/Image (5).png";

const Keynotes = () => {
  return (
    <div className="px-4 lg:px-14 py-5 md:py-10 lg:py-10 bg-[#FFFAF4]" id="keyspeaker">
      <div className="w-20 h-2 rounded-2xl my-2 bg-plcorange"></div>
      <p className="text-plcblack font-['aristsemibold'] text-3xl lg:text-5xl xxxl:text-7xl">
        Keynotes <span className="text-plcorange">Speakers </span>
      </p>
      <p className="lg:w-[22rem] 2xl:w-1/4 text-lg xxxl:text-2xl font-['gmedium']">
        Meet the industry leaders shaping the future of trading.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-5 py-8 md:gap-y-9">
        <div className="bg-[#FEE7C9] row-start-2 md:row-start-1 p-3 md:p-6 rounded-xl md:rounded-[49.67px] flex flex-col justify-between mb-4 md:mb-0">
          <p className="text-[#1C1A1A] pt-0 lg:pt-6 text-xl md:text-3xl syne font-semibold">
            Nduka Ukpabi
          </p>
          <p className="text-[#1C1A1A] syne md:text-[19.87px]">
            Chief Executive Officer, Pluralcode Academy
          </p>
        </div>
        <div>
          <img src={pic1} className="w-full" loading="lazy" alt="" />
        </div>
        <div className="bg-[#22205747] p-3 md:p-6 rounded-xl md:rounded-[49.67px] flex flex-col justify-between row-start-4 md:row-start-2 md:col-start-2 lg:row-start-1 lg:col-start-3 mb-4 md:mb-0 ">
          <p className="text-[#1C1A1A] pt-0 lg:pt-6 text-xl md:text-3xl syne font-semibold">
          Oghenetega Kafene
          </p>
          <p className="text-[#1C1A1A] syne md:text-[19.87px]">
          Regional Accounts Manager, Fx-pro
          </p>
        </div>
        <div>
          <img src={pic2} className="w-full" loading="lazy" alt="" />
        </div>
        <div>
          <img src={pic3} className="w-full" loading="lazy" alt="" />
        </div>
        <div className="bg-[#22205747] p-3 md:p-6 rounded-xl md:rounded-[49.67px] flex flex-col justify-between mb-4 md:mb-0 md:row-start-3 md:col-start-1 lg:row-start-2 lg:col-start-2">
          <p className="text-[#1C1A1A] pt-0 lg:pt-6 text-xl md:text-3xl syne font-semibold">
          George owolabi
          </p>
          <p className="text-[#1C1A1A] syne md:text-[18.5px]">
          Financial Market Facilitator, Pluralcode Academy 
          </p>
        </div>
        <div>
          <img src={pic4} className="w-full" loading="lazy" alt="" />
        </div>
        <div className="bg-[#FEE7C9] p-3 md:p-6 rounded-xl md:rounded-[49.67px] flex flex-col justify-between">
          <p className="text-[#1C1A1A] pt-0 lg:pt-6 text-xl md:text-3xl syne font-semibold">
          Chibueze Nwafor
          </p>
          <p className="text-[#1C1A1A] syne md:text-[19.87px]">
          Business Development Manager Africa, FX-pro
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Keynotes;
