"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import Loading from "../loading";
import Image from "next/image";
import { Button } from "../ui/button";
import { useCart } from "@/context/cart-context";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SimilarProducts from "./similar-products";

const Product = ({ id }: { id: string }) => {
  const router = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState<number>(1);
  const product = useQuery(api.products.getProduct, {
    productId: id as Id<"products">,
  });

  if (product === undefined) {
    return <Loading />;
  }
  return (
    <div className=" max-w-[1100px] m-auto py-10 space-y-6 lg:space-y-14">
      <Button
        variant={"ghost"}
        onClick={() => router.back()}
        className="capitalize opacity-50 text-[15px] px-0 hover:bg-transparent"
      >
        go back
      </Button>
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
            <div className="flex w-full lg:w-4/5 gap-4 flex-wrap lg:flex-nowrap ">
              <div className="bg-[#F1F1F1] h-12 gap-5 flex items-center">
                <Button
                  variant={"ghost"}
                  disabled={quantity <= 1}
                  onClick={() => setQuantity(quantity - 1)}
                  className="opacity-25 px-4 text-[13px] font-bold"
                >
                  -
                </Button>
                <p className="text-[13px] font-bold">{quantity}</p>
                <Button
                  variant={"ghost"}
                  onClick={() => setQuantity(quantity + 1)}
                  className="opacity-25 px-4 text-[13px] font-bold"
                >
                  +
                </Button>
              </div>
              <Button
                onClick={() => {
                  addToCart({
                    id: product._id,
                    amount: product.price,
                    image: product.mainImage,
                    name: product.name,
                    quantity: quantity,
                  });
                }}
              >
                ADD TO CART
              </Button>
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

      <SimilarProducts id={id} category={product.category} />
    </div>
  );
};

export default Product;
