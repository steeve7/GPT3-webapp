import React from "react";
import People from "../../assets/people.png";
import Ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="flex md:flex-row section__padding flex-col mt-14 md:mx-10 mx-0" id="home">
      <div className="flex-1 flex justify-center items-start flex-col md:mr-[5rem] mx-6 md:mb-0 mb-[3rem]">
        <h1 className="gradient_text font-extrabold text-[48px] md:text-[55px] tracking-tighter font-[Manrope] leading-[60px] md:leading-[75px]">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p className="font-normal text-[16px] md:text-[18px] mt-[1.5rem] text-[#81AFDD] font-[Manrope] leading-[24px] md:leading-[27px]">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className="w-full my-[3rem] mx-0 flex">
          <input type="text" placeholder="Your Email Address" className=" flex-[2] font-[Manrope] w-full min-h-[50px] md:text-[18px] text-[15px] md:leading-[27px] leading-[24px] bg-[#031B34] border-2 border-[#031B34] px-[1rem] text-white outline-none rounded-r-md"/>
          <button type="button" className="flex-[0.6] w-full min-h-[50px] font-[Manrope] font-bold md:text-[18px] text-[10px] md:leading-[27px] leading-[24px] bg-[#ff4820] rounded-r-md text-white px-[1rem] outline-none cursor-pointer border-0">Get Started</button>
        </div>
        <div className="flex md:flex-row flex-col w-full justify-start items-center mt-[1rem]">
          <img src={People} alt="people" className="w-[181.79px] h-[38px]"/>
          <p className="font-[Manrope] ml-[1rem] font-medium text-[12px] leading-[38px] text-white text-center">1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
          <img src={Ai} alt="ai" className="w-full h-full" />
        </div>
    </div>
  );
};

export default Header;
