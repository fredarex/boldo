import React from "react";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import Button from "../Button/Button";

const Menu = [
  {
    id: 1,
    name: "Product",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#",
  },


];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="w-full duration-200 py-[40px] text-white relative z-40">
      {/* upper Navbar */}
      <div className=" py-2">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="font-bold font-Manrope text-[43px] sm:text-[43px] flex items-center gap-2">
              <img src={Logo} alt="Logo" className="w-[26px] h-[33px]" />
              Boldo
            </a>
          </div>

          {/* lower Navbar */}
          <div data-aos="zoom-in" className="flex justify-center">
            <ul className="sm:flex hidden items-center gap-4">
              {Menu.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block text-[16px] font-open-sans font-semibold px-4 hover:text-primary duration-200"
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              text={'Log In'}
              textColor={'text-[#0A2640]'}
              width={'w-[128px]'}
              height={'h-[40px]'}
              bgColor={'bg-white'}
            />
          </div>


        </div>
      </div>

    </div>
  );
};

export default Navbar;
