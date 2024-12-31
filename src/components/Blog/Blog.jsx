import React from "react";
import Img1 from "../../assets/shirt/shirt.png";
import Img2 from "../../assets/shirt/shirt2.png";
import Img3 from "../../assets/shirt/shirt3.png";
import { FaArrowLeft, FaStar } from "react-icons/fa";
import { blog1, blog2, blog3, service1, service2, service3 } from "../../constants/image";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../Button/Button";

const ProductsData = [
    {
        id: 1,
        img: blog3,
        title: "Category",
        description:
            "Pitch termsheet backing validation focus release.",
        pic: "https://picsum.photos/seed/people/300/300",
        name: "Chandler Bing"
    },
    {
        id: 2,
        img: blog1,
        title: "Category",
        description:
            "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
        pic: "https://picsum.photos/seed/people/300/300",
        name: "Rachel Green"
    },
    {
        id: 3,
        img: blog2,
        title: "Category",
        description:
            "Beta prototype sales iPad gen-z marketing network effects value proposition",
        pic: "https://picsum.photos/seed/people/300/300",
        name: "Monica Geller"
    },
];
const Blog = ({ handleOrderPopup }) => {
    return (
        <div className="w-full my-[100px]">
            <div className="w-full px-[20px] sm:px-[60px]">
                {/* Header section */}
                <div className="w-full mt-[60px] flex flex-col justify-center items-center  text-left mb-24">
                    <p data-aos="fade-up" className="text-[20px] text-[#777777] font-open-sans">
                        Our Blog
                    </p>

                    <p data-aos="fade-up" className="max-w-[800px] text-center text-[24px] md:text-[48px] font-Manrope">
                        Value proposition accelerator product management venture
                    </p>
                </div>
                {/* Body section */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 ">
                    {ProductsData.map((data) => (
                        <div
                            data-aos="zoom-in"
                            className="bg-white relative duration-300 w-full sm:max-w-[300px]"
                        >
                            {/* image section */}
                            <div className="w-full h-[209px]">
                                <img
                                    src={data.img}
                                    alt=""
                                    className="w-full h-full object-cover group-hover:scale-100 duration-300 drop-shadow-md"
                                />
                            </div>
                            {/* details section */}
                            <div className="mt-4">
                                <h6 className="mb-3 text-[16px] text-[#0A2640] font-bold">
                                    {data.title}
                                    <span className="text-[#777777] ml-2">November 22, 2021</span>
                                </h6>
                                <p className="text-black font-[400] text-[20px]">{data.description}</p>
                            </div>
                            <div className="flex items-center mt-[12px]">
                                <div className="w-[32px]">
                                    <img
                                        src={data.pic}
                                        alt=""
                                        className="rounded-full w-full"
                                    />
                                </div>
                                <div className="ml-[20px]">
                                    <h1 className="text-[16px] text-black">
                                        {data.name}
                                    </h1>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full flex mt-[60px] justify-center">
                    <Button
                        text={'Load more'}
                        textColor={'text-black'}
                        width={'w-[219px]'}
                        height={'h-[60px]'}
                        borderline={'border border-black'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog;
