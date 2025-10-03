import { ArrowRight2 } from "iconsax-reactjs";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  return (
    <div className="mt-20 grid grid-cols-1 gap-[84px] md:gap-2.5 md:grid-cols-3 lg:gap-[30px] max-w-[1100px] m-auto">
      <div className=" h-[165px] rounded-xl w-full bg-[#F1F1F1] uppercase relative flex justify-center items-end pb-5">
        <div className="  w-24 h-24  m-auto absolute -top-16 ">
          <Image
            src={"/assets/headphones.svg"}
            alt="headphones"
            width={1000}
            height={1000}
            className=""
          />
          <Image
            src={"/assets/shadow.png"}
            alt="shadow"
            width={1000}
            height={1000}
            className="opacity-45 -mt-5"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-center text-[15px] font-bold">Headphones</h1>
          <Link
            href={"/headphones"}
            className="font-bold text-[13px] flex items-center gap-1 justify-center hover:text-[#D87D4A]  opacity-50 hover:opacity-100"
          >
            <span>shop</span>
            <ArrowRight2 size={12} color="#D87D4A" className="" />
          </Link>
        </div>
      </div>

      <div className=" h-[165px] rounded-xl w-full bg-[#F1F1F1] uppercase relative flex justify-center items-end pb-5">
        <div className="  w-24 h-24  m-auto absolute -top-16 ">
          <Image
            src={"/assets/speaker.svg"}
            alt="headphones"
            width={1000}
            height={1000}
            className=""
          />
          <Image
            src={"/assets/shadow.png"}
            alt="shadow"
            width={1000}
            height={1000}
            className="opacity-45 -mt-5"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-center text-[15px] font-bold">Speakers</h1>
          <Link
            href={"/speakers"}
            className="font-bold text-[13px] flex items-center gap-1 justify-center hover:text-[#D87D4A]  opacity-50 hover:opacity-100"
          >
            <span>shop</span>
            <ArrowRight2 size={12} color="#D87D4A" className="" />
          </Link>
        </div>
      </div>

      <div className=" h-[165px] rounded-xl w-full bg-[#F1F1F1] uppercase relative flex justify-center items-end pb-5">
        <div className="  w-24 h-24  m-auto absolute -top-16 ">
          <Image
            src={"/assets/earphone.svg"}
            alt="headphones"
            width={1000}
            height={1000}
            className=""
          />
          <Image
            src={"/assets/shadow.png"}
            alt="shadow"
            width={1000}
            height={1000}
            className="opacity-45 -mt-5"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-center text-[15px] font-bold">Earphones</h1>
          <Link
            href={"/earphones"}
            className="font-bold text-[13px] flex items-center gap-1 justify-center hover:text-[#D87D4A] opacity-50 hover:opacity-100"
          >
            <span>shop</span>
            <ArrowRight2 size={14} color="#D87D4A" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
