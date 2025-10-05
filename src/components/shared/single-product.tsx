"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import Loading from "../loading";
import Image from "next/image";
import { Button } from "../ui/button";

const Product = ({ id }: { id: string }) => {
  const product = useQuery(api.products.getProduct, {
    productId: id as Id<"products">,
  });

  if (product === undefined) {
    return <Loading />;
  }
  return (
    <div className="px-6 md:px-10 max-w-[1100px] m-auto py-10 space-y-14">
      <p className="uppercase">go back</p>
      <div className="space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24 items-center ">
          <div className={`bg-[#F1F1F1] flex flex-col  items-center py-10`}>
            <Image
              src={product.mainImage}
              alt={`${product.name} image`}
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
          <div className={`space-y-6 m-auto lg:m-0 max-w-[398px]`}>
            <h1 className="font-bold text-[28px]  md:text-[40px] uppercase">
              {product.name}
            </h1>
            <p className="text-[15px]  opacity-50  leading-7">
              {product.description}
            </p>
            <p className="text-lg font-bold">
              $ {product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
            <div>
              <Button>ADD TO CART</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <h1 className="font-bold text-[32px] uppercase">Features</h1>
            <p className=" whitespace-pre-line opacity-50 text-[15px]">
              {product.features}
            </p>
          </div>
          <div className="col-span-1 md:w-4/5 lg:w-full space-y-8 md:flex md:justify-between lg:block">
            <h1 className="text-[32px] font-bold">IN THE BOX</h1>
            <div className="space-y-2">
              {product.boxContent.map((content, index) => (
                <div className="flex gap-5 items-center" key={index}>
                  <p className="text-[15px] font-bold text-[#D87D4A]">
                    {content.quantity}x
                  </p>
                  <p className="opacity-50 text-[15px]">{content.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-[174px] lg:auto-rows-[280px] gap-7.5">
          <div className=" rounded-xl overflow-clip">
            <Image
              src={product.featureImage[0]}
              alt="image"
              width={1000}
              height={1000}
            />
          </div>
          <div className=" rounded-xl row-span-2 overflow-clip order-3 md:order-2">
            <Image
              src={product.featureImage[2]}
              alt="image"
              width={1000}
              height={1000}
              className="    h-full"
            />
          </div>
          <div className=" rounded-xl overflow-clip order-2 md:order-3">
            <Image
              src={product.featureImage[1]}
              alt="image"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
