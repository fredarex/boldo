import React from "react";
import { hero } from "../../constants/image";
import Navbar from "../Navbar/Navbar";
import Button from "../Button/Button";



const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="w-full relative overflow-hidden px-[60px] bg-cover bg-gray-100 bg-hero-pattern bg-no-repeat text-white">
      <Navbar />
      <div className=" w-full flex justify-between items-center duration-200 ">
        {/* background pattern */}
        
        {/* hero section */}
        <div className="container pb-8 sm:pb-0">
          <div className="w-full">
            <div className="w-full flex flex-col justify-between sm:flex-row">
              {/* text content section */}
              <div className="sm:w-[550px] mr-[40px] flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                <h1
                  data-aos="zoom-out"
                  data-aos-duration="500"
                  data-aos-once="true"
                  className="text-5xl font-Manrope sm:text-[48px] leading-[72px] font-[400px]"
                >
                  Save time by building  fast with Boldo Template
                </h1>
                <p
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="100"
                  className="text-[16px] text-[#F1F1F1] font-[400px]"
                >
                  Funding handshake buyer business-to-business
                  metrics iPad partnership. First mover advantage
                  innovator success deployment non-disclosure.
                </p>
                <div
                  data-aos="fade-up"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  className="max-w-[480px] mt-3 flex justify-between"
                >
                  <Button 
                    text={'Buy template'} 
                    textColor={'text-[#0A2640]'} 
                    width={'w-[250px]'} 
                    height={'h-[60px]'} 
                    bgColor={'bg-[#65E4A3]'} 
                  />
                  <Button 
                    text={'Explore'} 
                    textColor={'text-white'} 
                    width={'w-[187px]'} 
                    height={'h-[60px]'} 
                    borderline={'border border-[#fff]'}
                  />
                </div>
              </div>
              {/* image section */}
              <div className="order-1 sm:order-2">
                <div
                  data-aos="zoom-in"
                  data-aos-once="true"
                  className="relative z-10"
                >
                  <img
                    src={hero}
                    alt=""
                    className="w-full h-[300px] sm:h-full sm:w-[400px]"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
