import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { service1, service2, service3 } from "../../constants/image";
import { FaArrowRight } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: service1,
    title: "Cool feature title",
    description:
      "Learning curve network effects return on investment.",
  },
  {
    id: 2,
    img: service2,
    title: "Even cooler feature",
    description:
      "Learning curve network effects return on investment.",
  },
  {
    id: 3,
    img: service3,
    title: "Cool feature title",
    description:
      "Learning curve network effects return on investment.",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="w-full">
      <div className="w-full px-[60px]">
        {/* Header section */}
        <div className="w-full mt-[60px] flex flex-col justify-center items-center  text-left mb-24">
          <p data-aos="fade-up" className="text-[20px] text-[#777777] font-open-sans">
            Our Services
          </p>

          <p data-aos="fade-up" className="max-w-[800px] text-center text-[36px] md:text-[48px] font-Manrope">
            Handshake infographic mass market crowdfunding iteration.
          </p>
        </div>
        {/* Body section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 ">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="bg-white relative duration-300 w-full md:max-w-[300px]"
            >
              {/* image section */}
              <div className="w-full h-[200px] md:h-[354px]">
                <img
                  src={data.img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-100 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="mt-4">
                <h6 className="mb-4 text-[24px]">{data.title}</h6>
                <p className="text-[#777777] text-[20px]">{data.description}</p>
              </div>
              <div className="flex items-center border-b border-[#0A2640] w-[150px]">
                <div className="text-[20px] font-bold mr-2 ">Explore Page </div>
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
