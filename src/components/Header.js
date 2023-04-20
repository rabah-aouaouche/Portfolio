import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/home" className=" leading-none ">
            <span className="text-gradient btn-link font-bold text-2xl">
              RABAH'S
            </span>{" "}
            <br /> <span className=" font-bold">PORTFOLIO</span>
            {/* <img src={Logo} alt="" /> */}
          </a>
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
