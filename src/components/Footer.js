import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex relative md:mt-[150px] items-center flex-col bg-transparent bg-center px-[50px] text-black">
      <div className="flex items-center mt-10 justify-center gap-[10px]">
        <span className="w-[50px] h-[50px] rounded-[50%] bg-[black] flex items-center justify-center ease-out duration-300 hover:shadow-[0_0_0_0.180em_gray]">
          <a href="https://github.com/SouravKAgarwal">
            <FaGithub className="text-[white] text-[24px]" />
          </a>
        </span>
        <span className="w-[50px] h-[50px] rounded-[50%] bg-[black] flex items-center justify-center ease-out duration-300 hover:shadow-[0_0_0_0.180em_gray]">
          <a href="https://www.linkedin.com/in/souravkragarwal/">
            <FaLinkedinIn className="text-blue-600 text-[24px]" />
          </a>
        </span>
        <span className="w-[50px] h-[50px] rounded-[50%] bg-[black] flex items-center justify-center ease-out duration-300 hover:shadow-[0_0_0_0.180em_gray]">
          <a href="https://www.twitter.com/SouravK_Agarwal">
            <FaTwitter className="text-blue-500 text-[24px]" />
          </a>
        </span>
        <span className="w-[50px] h-[50px] rounded-[50%] bg-[black] flex items-center justify-center ease-out duration-300 hover:shadow-[0_0_0_0.180em_gray]">
          <a href="https://instagram.com/souravk_agarwal">
            <FaInstagram className="text-pink-600 text-[24px]" />
          </a>
        </span>
        {/* <span className="w-[50px] h-[50px] rounded-[50%] bg-[var(--black3)] flex items-center justify-center ease-out duration-300 hover:shadow-[0_0_0_0.225em_#d4d4d8]">
          <FaLinkedin />
        </span> */}
      </div>
      <ul className="flex items-center justify-center mb-10 gap-[15px] mt-[20px] md:mt-[30px] md:gap-[30px]">
        <li className="text-[12px] md:text-[16px]">
          <strong>Designed and &lt;/&gt; with &#129293;-SKA</strong>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
