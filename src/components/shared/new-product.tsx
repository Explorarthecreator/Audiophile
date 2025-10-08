import Image from "next/image";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

const NewProduct = () => {
  return (
    <div className="h-[80vh] max-w-[1100px] bg-[url(/assets/Bmap.png)] lg:bg-none bg-cover bg-center m-auto grid lg:grid-cols-2 items-center gap-20 px-6 lg:px-10 xl:px-0">
      <div className="space-y-6 m-auto lg:m-0 text-center lg:text-left max-w-[398px]">
        <h3 className=" text-sm font-normal tracking-[10px] opacity-45">
          NEW PRODUCT
        </h3>
        <h1 className="font-bold text-4xl md:text-[56px] uppercase">
          XX99 Mark II Headphones
        </h1>
        <p className="text-[15px] font-medium opacity-75  lg:w-11/12 leading-7">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link
          className={buttonVariants()}
          href={"/jd7d5zny3ktar6t2th5zdh6v9n7rtsad"}
        >
          SEE PRODUCT
        </Link>
      </div>
      <div className="hidden lg:block">
        <Image src={"/assets/Bitmap.png"} alt="" width={1000} height={1000} />
      </div>
    </div>
  );
};

export default NewProduct;
