import Image from "next/image";

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
          <p className="text-center font-bold opacity-50 text-[13px]">shop</p>
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
          <p className="text-center font-bold opacity-50 text-[13px]">shop</p>
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
          <p className="text-center font-bold opacity-50 text-[13px]">shop</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
