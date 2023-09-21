import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import {RiTwitterXFill} from "react-icons/ri"

const links = [
  {
    id: 1,
    href: "https://github.com/SouravKAgarwal",
    icon: (
      <FaGithub className="text-white hover:scale-105 text-md md:text-[24px]" />
    ),
  },
  {
    id: 2,
    href: "https://www.linkedin.com/in/souravkragarwal/",
    icon: (
      <FaLinkedinIn className="text-blue-600 hover:scale-105 text-md md:text-[24px]" />
    ),
  },
  {
    id: 3,
    href: "https://www.twitter.com/souravk_agarwal/",
    icon: (
      <RiTwitterXFill className="text-white hover:scale-105 text-md md:text-[24px]" />
    ),
  },
  {
    id: 4,
    href: "https://instagram.com/souravk_agarwal",
    icon: (
      <FaInstagram className="text-pink-600 hover:scale-105 text-md md:text-[24px]" />
    ),
  },
];

const Footer = () => {
  return (
    <div className="flex items-center flex-col bg-transparent bg-center px-[50px] text-black">
      <div className="flex items-center mt-8 justify-center gap-[10px]">
        {links.map(({ id, href, icon }) => (
          <span
            key={id}
            className="md:w-[50px] md:h-[50px] w-[35px] h-[35px] rounded-[50%] bg-[black] flex items-center justify-center ease-out duration-300 hover:shadow-[0_0_0_0.180em_gray]"
          >
            <a href={href}>{icon}</a>
          </span>
        ))}
      </div>
      <ul className="flex items-center justify-center mb-6 gap-4 mt-4 md:gap-8">
        <li className="text-[12px] md:text-[16px]">
          <strong>Designed and &lt;/&gt; with &#129293;-Sourav</strong>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
