import { Facebook, Instagram } from "iconsax-reactjs";
import { Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black py-9 px-6 xl:px-0 mt-24">
      <div className="max-w-[1100px] m-auto space-y-12">
        <div className="flex flex-col lg:flex-row  items-center md:items-start gap-12 md:gap-8 lg:gap-0 lg:justify-between">
          <Image
            src={"/assets/logo.svg"}
            alt="audiphile-logo"
            width={500}
            height={500}
            className="w-[143px] h-[25px]"
          />
          <div className="uppercase text-white text-center flex flex-col md:flex-row gap-4 md:gap-8.5 text-[13px] font-bold">
            <Link href={"/"} className="hover:text-[#D87D4A]">
              Home
            </Link>
            <Link href={"/headphones"} className="hover:text-[#D87D4A]">
              Headphones
            </Link>
            <Link href={"/speakers"} className="hover:text-[#D87D4A]">
              Speakers
            </Link>
            <Link href={"/earphones"} className="hover:text-[#D87D4A]">
              Earphones
            </Link>
          </div>
        </div>

        <p className="opacity-50 text-[15px] leading-[25px] text-white text-center md:text-justify lg:max-w-[540px]">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>

        <div className="flex flex-col md:flex-row lg:flex-col-reverse  justify-between gap-12">
          <p className="text-white text-center lg:text-left font-bold text-[15px] opacity-50">
            Copyright 2021. All Rights Reserved
          </p>

          <div className="flex gap-4 justify-center lg:justify-start lg:self-end">
            <Link href={"#"} className="">
              <Facebook
                variant="Bold"
                color=""
                className="fill-white hover:fill-[#D87D4A]"
              />
            </Link>
            <Link href={"#"}>
              <Twitter
                // fill="#fff"
                className="fill-white hover:fill-[#D87D4A]"
              />
            </Link>
            <Link href={"#"}>
              <Instagram color="#fff" className=" hover:fill-[#D87D4A]" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
