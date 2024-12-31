import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";
import { subscribe } from "../../constants/image";
import Button from "../Button/Button";

const BannerImg = {
  backgroundImage: `url(${subscribe})`,
  backgroundPosition: "",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

};

const Subscribe = () => {
  return (
    <div
      className="h-[391px] rounded-[12px] md:mx-[60px] mb-20 text-white "
      style={BannerImg}
    >
      <div className="w-full h-full">
        <div className="w-[80%] py-3 h-full flex flex-col justify-center items-center mx-auto">
          <h1 data-aos="zoom-in" className="text-[24px] text-center sm:text-[36px]  md:text-[48px] font-Manrope">
            An enterprise template to ramp up your company website
          </h1>
          <div  className="flex flex-col justify-center items-center md:flex-row mt-[60px]">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Your email address"
              className="w-[300px] h-[50px] sm:w-[370px] mb-[40px] md:mr-[40px] text-black max-h-[56px] px-4 rounded-[50px]"
            />
            <Button
               
              text={'Start now'}
              textColor={'text-[#0A2640]  mb-[40px]'}
              width={'w-[210px]'}
              height={'h-[60px]'}
              bgColor={'bg-[#65E4A3]'}
            />

          </div>

        </div>
      </div>
    </div>
  );
};

export default Subscribe;
