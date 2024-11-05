/* eslint-disable no-unused-vars */
import React from "react";
import bgImage from "../assets/bg_image.jpeg";

const Hero = () => {
  return (
    <div className=" bg-white h-[720px">
      <div className="flex relative h-[720px] w-full ">
        
        <div className="absolute -left-[160px] top-0 w-[1520px] h-full bottom-0">
          <img 
            src={bgImage}
            alt="Modern furniture setup"
            className="w-[1520px] h-[750px] object-cover"
          />
        </div>

      
        <div className="absolute right-0 top-2/3  -mt-[40px] -translate-y-1/2 max-w-[600px] -mr-16 h-[443px] w-[643px] ">
          <div className="bg-[#FFF3E3] p-10 rounded-lg">
            <div className="text-start">
              <span className="text-[#333333] text-[16px] font-[600] tracking-wider mb-4">
                New Arrival
              </span>
              
              <h1 className="text-[52px] leading-tight font-[700] text-[#B88E2F] mb-6">
                Discover Our
                <br />
                New Collection
              </h1>
              
              <p className="text-[#333333] text-[18px] font-[500] max-w-[500px] mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis.
              </p>

              <button className="w-[222px] h-[70px]  bg-[#B88E2F] text-[16px] font-[700] text-white px-8 py-2 hover:bg-[#967524] transition-colors">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
