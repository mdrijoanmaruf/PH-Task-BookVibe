import React from "react";
import { Link } from "react-router";

const Buttons = () => {
  return (

    <>
        <Link
        to="/"
        className="bg-[#23BE0A] py-[4px] px-[18px] text-white font-[600] text-[18px] rounded-md "
      >
        Sign in
      </Link>
      <Link
        to="/"
        className="bg-[#59C6D2] py-[4px] px-[18px] text-white font-[600] text-[18px] rounded-md "
      >
        Sign up
      </Link>
    </>
    
  );
};

export default Buttons;
