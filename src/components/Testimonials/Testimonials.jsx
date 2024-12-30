import React, { useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Slider from "react-slick";
import Button from "../Button/Button";
import { service4 } from "../../constants/image";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const TestimonialData = [
  {
    id: 1,
    name: "Albus Dumbledore",
    text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    img: "https://picsum.photos/seed/people/200/200",
    work: "Manager @ Howarts"
  },
  {
    id: 2,
    name: "Severus Snape",
    text: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    img: "https://picsum.photos/seed/people/210/210",
    work: "Manager @ Slytherin"
  },
  {
    id: 3,
    name: "Harry Potter",
    text: "“Release facebook responsive web design business model canvas seed money monetization.”",
    img: "https://picsum.photos/seed/people/300/300",
    work: "Team Leader @ Gryffindor"
  },

];


const Testimonials = () => {
  const [imageIndex, setImageIndex] = useState(0);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, position: 'absolute', top: -50, display: "block", }}
        onClick={onClick}
      >

      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", fontSize: 40, position: 'absolute', left: '85%', top: -50, display: "block", }}
        onClick={onClick}
      />
    );
  }



  let settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="py-10 px-[20px] sm:px-[60px] mb-10 bg-[#0A2640]">
        <div className="w-full relative">
          {/* header <section> */}
          <div className="text-left mb-10 max-w-[600px]">
            <p data-aos="fade-up" className="text-[30px] sm:text-[48px] text-white">
              An enterprise template to ramp up your company website
            </p>
          </div>

          {/* Testimonial cards */}
          <div className="slider-container" data-aos="zoom-in text-white">
            <Slider {...settings}>
              {TestimonialData.map((data, idx) => (
                <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
                  <div
                    key={data.id}
                    className="bg-white max-w-[350px] flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                  >

                    <div className="flex flex-col items-center gap-4 font-open-sans">
                      <div className="space-y-3">
                        <p className="text-[16px] md:text-[24px] text-black">{data.text}</p>

                      </div>
                    </div>
                    <div className="flex">
                      <div className="w-[58px]">
                        <img
                          src={data.img}
                          alt=""
                          className="rounded-full w-full"
                        />
                      </div>
                      <div className="ml-[20px]">
                        <h1 className="text-[16px] font-bold text-[#0A2640]">
                          {data.name}
                        </h1>
                        <p>{data.work}</p>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

        </div>
      </div>

      {/*  */}
      <div>
        <div className=" rounded-[12px] mx-[20px] md:mx-[60px] mt-[80px] mb-[10px] sm:mb-20 text-white">
          <img className="w-full" src={service4} />
        </div>

        <div className="flex flex-col sm:flex-row justify-between mx-[20px] md:mx-[60px]">
          <h3 data-aos="fade-up" className="max-w-[500px] font-Manrope md:text-[36px]">
            We connect our customers with the best, and help them keep up-and stay open.
          </h3>

          <div>
            <div className="flex pb-2  justify-between items-center border-b border-[#C4C4C4]">
              <p className="text-[20px] mr-[60px]">We connect our customers with the best?</p>
              <IoIosArrowDropdownCircle size={28} />
            </div>
            <div className="flex mt-[40px]  justify-between pb-2 items-center border-b border-[#C4C4C4]">
              <p className="text-[20px] mr-[60px]">Android research & development rockstar? </p>
              <IoIosArrowDropdownCircle size={28} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
