import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { customer1, customer2 } from "../../constants/image";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../Button/Button";
import { LuFeather } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";

const Banner = () => {
  return (
    <div className="mt-[120px] px-[20px] sm:px-[60px]">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="md:max-w-[464px] md:max-h-[610px] zoom-in">
            <img
              src={customer1}
              alt=""
              className="object-cover"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-[24px] lg:text-[36px] font-Manrope">
              We connect our customers with the best, and help them keep up-and stay open.
            </h1>

            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaCheckCircle size={36} />
                <p className="text-[20px]">We connect our customers with the best.</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaCheckCircle size={36} />
                <p className="text-[20px]">Advisor success customer launch party.</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <FaCheckCircle size={36} />
                <p className="text-[20px]">Business-to-consumer long tail.</p>
              </div>

            </div>
            <Button
              text={'Start now'}
              textColor={'text-white'}
              width={'w-[210px]'}
              height={'h-[60px]'}
              bgColor={'bg-[#0A2640]'}
            />
          </div>
        </div>

        <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          {/* image section */}


          {/* text details section */}
          <div className="md:max-w-[464px] flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-[24px] lg:text-[36px] font-Manrope">
              We connect our customers with the best, and help them keep up-and stay open.
            </h1>

            <div className="flex flex-col gap-4 text-[16px] cursor-pointer">
              <div data-aos="fade-up" className="px-4 h-[68px] shadow-[0px_4px_32px_0px_#00000014] bg-white rounded-[4px] hover:bg-[#0A2640] hover:text-white flex items-center gap-4">
                <LuFeather size={28} />
                <p className="">We connect our customers with the best.</p>
              </div>
              <div data-aos="fade-up" className="px-4 h-[68px] shadow-[0px_4px_32px_0px_#00000014] bg-white rounded-[4px] hover:bg-[#0A2640] hover:text-white flex items-center gap-4">
                <IoEyeOutline size={28} />
                <p className="">Advisor success customer launch party.</p>
              </div>
              <div data-aos="fade-up" className="px-4 h-[68px] shadow-[0px_4px_32px_0px_#00000014] bg-white rounded-[4px] hover:bg-[#0A2640] hover:text-white flex items-center gap-4">
                <MdOutlineWbSunny size={28} />
                <p className="">Business-to-consumer long tail.</p>
              </div>
            </div>
          </div>

          <div data-aos="md:max-w-[464px] md:max-h-[610px] zoom-in">
            <img
              src={customer2}
              alt=""
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
