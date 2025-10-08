"use client";
import React from "react";
import NewProduct from "./shared/new-product";
import { usePathname } from "next/navigation";
import MinorHeader from "./shared/minor-header";
import NavBar from "./nav-bar";

const Header = () => {
  const pathName = usePathname();
  const options = ["headphones", "earphones", "speakers"];

  return (
    <div className="bg-[#0E0E0E] text-white ">
      {/* <p>THis is to imitate a nav bar</p> */}
      <NavBar />
      {pathName === "/" ? (
        <NewProduct />
      ) : (
        options.includes(pathName.slice(1)) && <MinorHeader route={pathName} />
      )}
    </div>
  );
};

export default Header;
