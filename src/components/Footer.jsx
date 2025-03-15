import plogo from "../assets/images/PluralCode 4.png";
import inst from "../assets/images/vector (3).png";
import face from "../assets/images/Group.png";
import twit from "../assets/images/Group (1).png";
import link from "../assets/images/Group (2).png";
import tik from '../assets/images/Group 20686.png';
import { Link } from "react-router-dom";
import tel from '../assets/images/phone-call 1.png'
import inout from '../assets/images/Instagram Outline.png'
import email from '../assets/images/envelope 2.png'
import faceout from '../assets/images/Facebook Outline.png'
import twitout from '../assets/images/Twitter Outline.png'
import act from "../assets/images/act.png"
import act2 from "../assets/images/act2.png"
import sdc from "../assets/images/sdc.png"

const Footer = () => {
  return (
    <div className="py-8 px-4 lg:px-8 w-full flex flex-col lg:flex-row gap-5 lg:gap-10 justify-between bg-plcblue font-['gmedium'] text-white">
      <div className="w-full lg:w-72 xxxl:w-96">
        <img src={plogo} className="w-50 md:w-80 lg:w-52" alt=""/>
        <p className="py-4 interFont font-normal xxxl:text-2xl">Acquire tech skills to build a borderless career.</p>
        <div className="flex gap-3 py-2">
          <a target="_blank" rel="noreferrer" href="https://instagram.com/pluralcode_academy?igshid=MzRlODBiNWFlZA=="><img src={inst} className="w-6" alt="" /></a>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/PlcTechAcademy?mibextid=LQQJ4d"><img src={face} className="w-6" alt="" /></a>
          <a target="_blank" rel="noreferrer" href="https://twitter.com/pluralcode?s=21&t=B1MuR2VoGVHj3cpdZyDZzw"><img src={twit} className="w-6" alt="" /></a>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/company/pluralcode-technologies/"><img src={link} className="w-6" alt="" /></a>
          <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@pluralcodeacademy?_t=8cARWxT1YVK&_r=1"><img src={tik}  className="w-6" alt=""/></a>
        </div>
        <p className="interFont text-xs py-4 pb-2">&copy;2025 Pluralcode Academy. all right reserved</p>
        <div className="flex gap-1 py-4 ">
            <p className="interFont text-xs md:w-[16rem] ">Pluralcode is accredited by the Academic Council of Training & Development, USA.</p>
            <img src={act} className="w-16" loading="lazy" alt=""/>
        </div>
        <div className="flex gap-1 py-4 ">
            <p className="interFont text-xs md:w-[16rem]">Pluralcode is accredited by the International Association for Quality Assurance (QAHE) ISO Certified</p>
            <img src={act2} className="w-16" loading="lazy" alt=""/>
        </div>
        <div className="flex gap-1 py-4 ">
            <p className="interFont text-xs md:w-[16rem]">Pluralcode is accredited by the Skill Development Council, Canada</p>
            <img src={sdc} className="w-16" loading="lazy" alt=""/>
        </div>
        
      </div>

      <div className="w-full foot grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 lg:justify-center gap-5 lg:mt-0  lg:pb-10">
        <div className="flex flex-col gap-2 font-[gregular]">
          <h5 className="pb-1 xxxl:text-2xl">Schools</h5>
          <Link className="xxxl:text-xl" to="#">School of Engineering</Link>
          <Link className="xxxl:text-xl" to="#">School of Product</Link>
          <Link className="xxxl:text-xl" to="#">School of Data</Link>
          <Link className="xxxl:text-xl" to="#">School of Digital Economy</Link>
          <Link className="xxxl:text-xl" to="#">School of Business</Link>
          <Link className="xxxl:text-xl" to="#">School of Emerging Technology</Link>
          
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="pb-1 xxxl:text-2xl">Hackerspaces</h5>
          <Link className="xxxl:text-xl" to="#">Ikeja Hackerspace </Link>
          <Link className="xxxl:text-xl" to="#">Victoria Island Hackerspace</Link>
          <Link className="xxxl:text-xl" to="#">Abuja Hackerspace</Link>
          <Link className="xxxl:text-xl" to="#">Ibadan Hackerspace</Link>
          <Link className="xxxl:text-xl" to="#">Agile Project Management</Link>
          
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="pb-1 xxxl:text-2xl">Policies</h5>
          <Link className="xxxl:text-xl" to="https://pluralcode.academy/payment/terms.html" target="_blank">Terms and Condition</Link>
          <Link className="xxxl:text-xl" to="https://pluralcode.academy/payment/terms.html" target="_blank">Student Loan Policy</Link>
          <Link className="xxxl:text-xl" to="https://pluralcode.academy/payment/terms.html" target="_blank">Refunds Policy</Link>
          <Link className="xxxl:text-xl" to="https://pluralcode.academy/privacy_policy/" target="_blank">Privacy Policy</Link>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="pb-1 xxxl:text-2xl">Contact</h5>
          <div className="flex gap-3 xxxl:text-xl items-center"><img className="w-4 xxxl:w-5" alt="" src={tel}/><Link to="tel:+2347083153185" target="_blank">+(234) 708-315-3185.</Link></div>
          <div className="flex gap-3 xxxl:text-xl items-center"><img className="w-4 xxxl:w-5" alt="" src={tel}/><a href="tel:+2348131529862" target="_blank" rel="noreferrer">+(234) 813-152-9862.</a></div>
          <div className="flex gap-3 xxxl:text-xl items-center"><img className="w-4 xxxl:w-5" alt="" src={twitout} /><a href="https://twitter.com/pluralcode?s=21&t=B1MuR2VoGVHj3cpdZyDZzw" target="_blank" rel="noreferrer">pluralcode</a></div>
          <div className="flex gap-3 xxxl:text-xl items-center"><img className="w-4 xxxl:w-5" alt="" src={inout} /><a href="https://instagram.com/pluralcode_academy?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer">pluralcode_academy</a></div>
          <div className="flex gap-3 xxxl:text-xl items-center"><img className="w-4 xxxl:w-5" alt="" src={faceout}/><a href="https://www.facebook.com/PlcTechAcademy?mibextid=LQQJ4d" target="_blank" rel="noreferrer">pluralcode_academy</a></div>
          <div className="flex gap-3 xxxl:text-xl items-center"><img className="w-4 xxxl:w-5" alt="" src={email}/><Link to="mailto:Info@pluralcode.academy" target="_blank">support@pluralcode.academy</Link></div>
        </div>
        
        <div className="lg:col-start-2 flex flex-col gap-2">
          <h5 className="pb-1 xxxl:text-2xl">Futured Courses</h5>
          <Link className="xxxl:text-xl" to="#">Creative Design</Link>
          <Link className="xxxl:text-xl" to="#">Financial Marketing</Link>
          <Link className="xxxl:text-xl" to="#">Content Creation</Link>
          
          
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="pb-1 xxxl:text-2xl">Diploma Courses</h5>
          <Link className="xxxl:text-xl" to="#">Software Engineering</Link>
          <Link className="xxxl:text-xl" to="#">Cyber Security</Link>
          <Link className="xxxl:text-xl" to="#">Cloud Computing</Link>
          <Link className="xxxl:text-xl" to="#">Product Design</Link>
          <Link className="xxxl:text-xl" to="#">Product Management</Link>
          <Link className="xxxl:text-xl" to="#">Project Management</Link>
          <Link className="xxxl:text-xl" to="#">Data Analytics</Link>
          <Link className="xxxl:text-xl" to="#">Business Analytics</Link>
          
        </div>
       
        
      </div>
    </div>
  );
};


export default Footer;
