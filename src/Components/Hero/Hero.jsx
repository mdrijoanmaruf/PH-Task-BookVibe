import React from "react";
import heroImg from "../../assets/Hero.png";
import { Link } from "react-router";
const Hero = () => {
  return (
    <div className=" flex justify-between items-center p-20 bg-[#1313130D] my-12 rounded-xl">
      <div className="flex flex-col gap-6">
        <h1 className="text-[#131313] font-[700] text-[50px] " >
          Books to freshed up <br /> your bookshelf
        </h1>
        <div>
        <Link
          to="/list"
          className="bg-[#59C6D2] py-[8px] px-[22px] text-white font-[600] text-[18px] rounded-md "
        >
          View The List
        </Link>
        </div>
      </div>
      <div className="">
        <img className="w-[250px]" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
