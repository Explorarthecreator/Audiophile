import Link from "next/link";
import Cart from "./shared/cart";
import Image from "next/image";
import { HamburgerMenu } from "iconsax-reactjs";
import MobileMenu from "./mobile.menu";

const NavBar = () => {
  return (
    <div className="px-6 relative md:px-10 xl:px-0 max-w-[1100px] m-auto py-8 flex justify-between items-center lg:border-b lg:border-b-white/20">
      <MobileMenu />
      <Link href={"/"}>
        <Image
          src={"/assets/logo.svg"}
          alt="audiphile-logo"
          width={500}
          height={500}
          className="w-[143px] h-[25px]"
        />
      </Link>
      <div className="uppercase text-white text-center hidden lg:flex flex-col md:flex-row gap-4 md:gap-8.5 text-[13px] font-bold">
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
      <Cart />
    </div>
  );
};

export default NavBar;
