import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { logo2 } from "../../constants/image";
import Button from "../Button/Button";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Products",
    link: "/#product",
  },
  {
    title: "Services",
    link: "/#services",
  },
  
];

const CompanyLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "Careers",
    link: "/#careers",
  },
  {
    title: "Services",
    link: "/#services",
  },
  
];

const ResourceLinks = [
  {
    title: "Blog",
    link: "/#",
  },
  {
    title: "Products",
    link: "/#products",
  },
  {
    title: "Services",
    link: "/#services",
  },
  
];

const Footer = () => {
  return (
    <div  className="px-[20px] md:px-[60px]">
      <div className="w-full">
        <div data-aos="zoom-in" className="text-[#777777] grid md:grid-cols-3 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-[43px] text-[#0A2640] text-[24px] font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={logo2} alt="" className="max-w-[50px]" />
              Boldo
            </h1>
            <p>
            Social media validation business model canvas 
            graphical user interface launch party creative facebook iPad twitter.
            </p>

            <p className="mt-[60px]">All rights reserved.</p>
          </div>

          {/* Footer Links */}
          <div className="font-open-sans text-[12px] sm:text-[20px] grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-[#0A2640] text-xl font-bold sm:text-left text-justify mb-3">
                  Landings
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-[#0A2640] text-xl font-bold sm:text-left text-justify mb-3">
                  Company
                </h1>
                <ul className="flex flex-col gap-3">
                  {CompanyLinks.map((link) => {
                    if(link.title =='Careers') {
                      return (
                        <li
                          className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                          key={link.title}
                        >
                          <div className="flex items-center flex-wrap">
                            {link.title}
                            <Button
                            text={'Hiring !'}
                            textColor={'text-[#0A2640] text-[8px] sm:text-[13px] ml-[8px] px-1'} 
                            width={'w-[52px] sm:w-[72px]'} 
                            height={'w-[20px] sm:h-[30px]'} 
                            bgColor={'bg-[#65E4A3]'} 
                          />
                          </div>
                          
                        </li>
                      )
                    }else {
                      return (
                        <li
                          className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                          key={link.title}
                        >
                          <span>{link.title}</span>
                        </li>
                      )
                    }
                    })}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-[#0A2640] text-xl font-bold sm:text-left text-justify mb-3">
                  Resources
                </h1>
                <ul className="flex flex-col gap-3">
                  {ResourceLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
