import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ProductResponse } from "@/types";

const ProductItem = ({
  product,
  index,
}: {
  product: ProductResponse;
  index: number;
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-[1100px] m-auto px-6 md:px-10">
      <div
        className={`bg-[#F1F1F1] flex flex-col  items-center py-10 ${index % 2 === 0 ? "order-1" : "order-2"}`}
      >
        <Image
          src={product.mainImage}
          alt="headphones"
          width={1000}
          height={1000}
          className="object-contain max-h-[380px] md:max-h-[245px]"
        />
        <Image
          src={"/assets/shadow.png"}
          alt="shadow"
          width={1000}
          height={1000}
          className="opacity-45   max-h-10"
        />
      </div>
      <div
        className={`space-y-6 m-auto lg:m-0 text-center lg:text-left max-w-[398px] ${index % 2 === 0 ? "order-2" : "order-1"}`}
      >
        {index === 0 && (
          <h3 className=" text-sm font-normal tracking-[10px] text-[#D87D4A] ">
            NEW PRODUCT
          </h3>
        )}

        <h1 className="font-bold text-4xl  md:text-[40px] uppercase">
          {product.name}
        </h1>
        <p className="text-[15px] font-medium opacity-75   leading-7">
          {product.description}
        </p>
        <Button>SEE PRODUCT</Button>
      </div>
    </div>
  );
};

export default ProductItem;
