import Image from "next/image";
import React from "react";

const Location = () => {
  return (
    <div className=" mt-24 max-w-[1100px] m-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 lg:items-center">
      <div className="text-center lg:text-left space-y-8 order-2 lg:order-1 md:w-4/5 lg:w-11/12 md:m-auto">
        <h1 className="uppercase text-[28px] md:text-[40px] font-bold">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio
          gear
        </h1>
        <p className="opacity-50 text-[15px] ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className="order-1 lg:order-2 w-full h-[300px] lg:h-auto object-top">
        <Image
          src={"/assets/advert.jpg"}
          alt=""
          width={1000}
          height={1000}
          className="h-full w-full hidden lg:block rounded-xl"
        />
        <Image
          src={"/assets/advertmd.jpg"}
          alt=""
          width={1000}
          height={1000}
          className="h-full w-full hidden md:block lg:hidden rounded-xl"
        />
        <Image
          src={"/assets/advertsm.jpg"}
          alt=""
          width={1000}
          height={1000}
          className="h-full w-full block md:hidden rounded-xl"
        />
      </div>
    </div>
  );
};

export default Location;
