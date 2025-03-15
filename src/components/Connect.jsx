import { useEffect } from "react";
import icon1 from "../assets/images/vector (1).png";
import icon2 from "../assets/images/vector (2).png";
import icon3 from "../assets/images/vector (3).png";
import icon4 from "../assets/images/vector (4).png";
import UserMap from "./UserMap";
import Swal from "sweetalert2";

const Connect = () => {
  useEffect(() => {
    const f = document.getElementById("formD");
    f.addEventListener("submit", (e) => {
      const data = new FormData(f);
      const action = e.target.action;
      e.preventDefault();
      fetch(action, {
        method: "POST",
        body: data,
      }).then(() => {
        return Swal.fire({
          title: "Successful!",
          icon: "success",
          confirmButtonText: "See you!",
        });
      });
    });
  }, []);
  return (
    <div
      className="px-4 lg:px-14 py-5 md:py-10 lg:py-10 bg-[#F0EFF3]"
      id="join"
    >
      <div className="bg-plcblue rounded-3xl md:rounded-[52.9px]">
        <div className="px-3 md:px-6 py-8 md:py-16 flex flex-col xl:flex-row">
          <div className="w-full text-white flex flex-col justify-between">
            <h2 className="text-2xl w-full md:w-[35rem] text-white font-[aristsemibold] md:text-[52.9px] md:leading-none">
              We’re Here To Connect And Assist You
            </h2>
            <p className="md:text-lg syne w-full md:w-[33rem]">
              Got questions about this event? Need help with your registration?
              Get in touch with us
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 text-white gap-4 md:gap-y-8 pt-6 xl:pt-0">
              <div>
                <p className="text-lg font-[aristbold] md:text-2xl">
                  CONTACT US
                </p>
                <p className="md:text-lg syne md:pt-3">+234 813 152 9862</p>
              </div>
              <div>
                <p className="text-lg font-[aristbold] md:text-2xl">
                  EVENT LOCATION
                </p>
                <p className="md:text-lg syne md:pt-3 lg:w-[22rem]">
                  Plot 8. Block 1, Memunat Ayodeji Crescent off Etal Hotel, by
                  NNPC Filling Station, by first bank busstop,off kudirat Abiola
                  way
                </p>
              </div>
              <div>
                <p className="text-lg font-[aristbold] md:text-2xl">EMAIL</p>
                <p className="md:text-lg syne md:pt-3">
                  info@pluralcodeacademy.com
                </p>
              </div>
              <div>
                <p className="text-lg font-[aristbold] md:text-2xl">
                  FOLLOW US
                </p>
                <div className="flex gap-4 pt-3 items-center">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/PlcTechAcademy?mibextid=LQQJ4d"
                  >
                    <img src={icon1} alt="" className="w-5 h-fit" />
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/pluralcode-technologies/"
                  >
                    <img src={icon2} alt="" className="w-5 h-fit" />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://instagram.com/pluralcode_academy?igshid=MzRlODBiNWFlZA=="
                  >
                    <img src={icon3} alt="" className="w-5 h-fit" />
                  </a>
                  <img src={icon4} alt="" className="w-5 h-fit" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-0 md:px-5 pt-6">
            <form
              id="formD"
              action="https://script.google.com/macros/s/AKfycbzZ89xyGWTtoJFjh53h3GsjRFb3QrznkmtbeMrnAtK0_7n9P-qXZlyFr6safxm8cZ7b8g/exec"
              className="w-full lg:w-[90%] lg:m-auto xl:ml-auto bg-[#FFFAF4] text-[#1C1A1A] syne rounded-3xl md:rounded-[52.9px] p-4 md:p-6 py-8 md:py-16"
            >
              <h2 className="text-xl md:text-[32px] font-[aristbold]">
                GET IN TOUCH
              </h2>
              <p className="text-lg syne pb-4">
                Fill the form below to make further inquiries, partner or be one
                of our sponsors{" "}
              </p>

              <input
                type="text"
                className="w-full py-2 mt-2 placeholder:text-[#7E7E7E] outline-blue-200 placeholder:syne border-b border-b-[#7E7E7E] placeholder:text-[21.16px]"
                placeholder="Name"
                name="Name"
                required
              />
              <input
                type="email"
                className="w-full py-2 mt-4 placeholder:text-[#7E7E7E] outline-blue-200 placeholder:syne border-b border-b-[#7E7E7E] placeholder:text-[21.16px]"
                placeholder="Email"
                name="Email"
                required
              />
              <input
                type="text"
                className="w-full py-2 mt-4 placeholder:text-[#7E7E7E] outline-blue-200 placeholder:syne border-b border-b-[#7E7E7E] placeholder:text-[21.16px]"
                placeholder="Number"
                name="Number"
                required
              />
              <input
                type="text"
                className="w-full py-2 mt-4 placeholder:text-[#7E7E7E] outline-blue-200 placeholder:syne border-b border-b-[#7E7E7E] placeholder:text-[21.16px]"
                placeholder="Location"
                name="Location"
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-[21rem] bg-plcorange p-2 md:p-3 rounded-lg font-[gmedium] text-white text-sm mt-8 md:mt-10"
                >
                  Join Event
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="h-[25rem] md:h-[35rem] w-[85%] m-auto rounded-[56px] pb-10 md:pb-20">
          <UserMap />
        </div>
      </div>
    </div>
  );
};

export default Connect;
