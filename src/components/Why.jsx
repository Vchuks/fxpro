import pic1 from "../assets/images/01.png";
import pic2 from "../assets/images/02.png";
import pic3 from "../assets/images/03.png";
import pic4 from "../assets/images/04.png";

const Why = () => {
  return (
    <div className="px-4 lg:px-14 py-5 md:py-10 lg:py-10 bg-[#F0EFF3]" id="attend">
      <div className="w-20 h-2 rounded-2xl my-2 bg-plcorange"></div>
      <p className="text-plcblack font-['aristsemibold'] text-3xl lg:text-5xl xxxl:text-7xl">
        Why <span className="text-plcorange">Attend? </span>
      </p>
      <p className="lg:w-[22rem] 2xl:w-1/4 text-lg xxxl:text-2xl font-['gmedium']">
        Discover why Next-Gen AI Summit is the must-attend event for AI
        professionals, innovators, and industry leaders.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-8">
        <div data-aos="zoom-out"
            data-aos-duration="2000" className="w-full rounded-[52.9px] bg-[#FEE7C9] p-5 pb-0">
          <p className="text-[#0C0C0C] tracking-widest md:px-8 pt-4 text-xl md:text-2xl font-[aristbold]">
            EXPERT INSIGHTS
          </p>
          <div className={`flex flex-col-reverse md:flex-row pt-4`}>
            <div className="w-[90%]">
              <img src={pic1} alt="" loading="lazy" className="w-[85%] pl-2 md:pt-[4rem] lg:pt-[9rem] xl:pt-[5.5rem]" />
            </div>
            <div className="w-full">
              <p className="text-[#0C0C0C] text-[19px] md:text-[22px] w-full md:w-[18rem]">
                Gain access to knowledge from industry leaders and experienced
                traders who will share their strategies, market analysis, and
                tips to help you succeed.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in"
            data-aos-duration="2000" className="w-full rounded-[52.9px] bg-[#B6B5C7] p-5 pb-0">
          <p className="text-[#0C0C0C] tracking-widest md:px-8 lg:px-2 xl:px-8 pt-4 text-xl md:text-2xl font-[aristbold]">
            NETWORKING OPPORTUNITIES
          </p>
          <div className={`flex flex-col-reverse md:flex-row pt-4`}>
            <div className="w-[90%]">
              <img src={pic2} alt="" loading="lazy" className="w-full px-2 md:pt-[4rem] lg:pt-[9rem] xl:pt-[6rem]" />
            </div>
            <div className="w-full">
              <p className="text-[#0C0C0C] text-[19px] md:text-[22px] w-full md:w-[17rem]">
                Connect with fellow traders, industry professionals, and
                potential mentors. Building a network can provide support and
                collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-out"
            data-aos-duration="2000" className="w-full rounded-[52.9px] bg-[#B6B5C7] p-5 pb-0">
          <p className="text-[#0C0C0C] tracking-widest md:px-8 pr-4 pt-4 text-xl md:text-2xl font-[aristbold] md:text-right">
            INTERACTIVE LEARNING
          </p>
          <div className={`flex flex-col md:flex-row pt-4`}>
            
            <div className="w-full">
              <p className="text-[#0C0C0C] text-[19px] md:text-[22px] w-full md:w-[19rem]">
              Participate in hands-on workshops designed to improve your trading skills. Engage in real-time discussions and practical exercises to solidify your understanding.
              </p>
            </div>
            <div className="w-[90%]">
              <img src={pic3} alt="" loading="lazy" className="w-full px-2 md:pt-[4rem] lg:pt-[10rem] xl:pt-[6.5rem]" />
            </div>
          </div>
        </div>
        <div data-aos="zoom-in"
            data-aos-duration="2000" className="w-full rounded-[52.9px] bg-[#FEE7C9] p-5 pb-0">
          <p className="text-[#0C0C0C] tracking-widest md:px-8 pr-4 pt-4 text-xl md:text-2xl font-[aristbold] md:text-right">
            LIVE DEMONSTRATIONS
          </p>
          <div className={`flex flex-col md:flex-row pt-4`}>
            
            <div className="w-full">
              <p className="text-[#0C0C0C] text-[19px] md:text-[22px] w-full md:w-[17rem]">
              Watch live trading sessions to see strategies in action. This can help you understand how to implement techniques in real market conditions.
              </p>
            </div>
            <div className="w-[90%]">
              <img src={pic4} alt="" loading="lazy" className="w-full px-2 md:pt-[4rem] lg:pt-[9rem] xl:pt-[6.5rem]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
