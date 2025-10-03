"use client";
import React from "react";
import NewProduct from "./shared/new-product";
import { usePathname } from "next/navigation";
import MinorHeader from "./shared/minor-header";

const Header = () => {
  const pathName = usePathname();

  return (
    <div className="bg-[#0E0E0E] text-white ">
      {/* <p>THis is to imitate a nav bar</p> */}
      {pathName === "/" ? <NewProduct /> : <MinorHeader route={pathName} />}
    </div>
  );
};

export default Header;
