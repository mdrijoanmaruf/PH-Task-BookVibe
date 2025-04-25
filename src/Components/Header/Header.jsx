import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router";
import Buttons from "./Buttons";

const navMenu = () => {
  return (
    <>
      <li className="">
        <NavLink to="/" className=" px-[16px] py-[8px]">
          <span className="">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/list" className=" px-[16px] py-[8px]">
          <span>Listed Books</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/read" className=" px-[16px] py-[8px]">
          <span>Pages To Read</span>
        </NavLink>
      </li>
    </>
  );
};

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navMenu()}
              <Buttons></Buttons>
            </ul>
          </div>
          <Link
            to="/"
            className="font-[700] text-[26px] text-[#131313] text-xl"
          >
            Book Vibe
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 justify-center items-center">
            {navMenu()}
          </ul>
        </div>
        <div className="hidden navbar-end md:flex gap-4">
          <Buttons></Buttons>
        </div>
      </div>
    </div>
  );
};

export default Header;
