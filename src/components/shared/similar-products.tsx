"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Id } from "../../../convex/_generated/dataModel";
import Loading from "../loading";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const SimilarProducts = ({
  category,
  id,
}: {
  category: string;
  id: string;
}) => {
  const similarProducts = useQuery(api.products.getSimilarProducts, {
    category,
    excludeId: id as Id<"products">,
  });

  if (similarProducts === undefined) {
    return <Loading />;
  }
  return (
    <div className="my-40 space-y-16">
      <h1 className="uppercase text-[32px] font-bold text-center">
        you may also like
      </h1>
      <div className=" grid md:grid-cols-3 gap-14 md:gap-2.5 lg:gap-[30px] ">
        {similarProducts.map((product) => (
          <div key={product._id} className="space-y-8">
            <div
              className={`bg-[#F1F1F1] flex flex-col  items-center md:py-10 rounded-lg`}
            >
              <Image
                src={product.mainImage}
                alt={`${product.name} image`}
                width={1000}
                height={1000}
                className="object-contain h-[120px] md:h-[318px] lg:h-[245px]"
              />
            </div>

            <h2 className="text-center text-2xl font-bold h-16 overflow-clip">
              {product.name}
            </h2>

            <div className="text-center">
              <Link href={`/${product._id}`} className={`${buttonVariants()} `}>
                SEE PRODUCT
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
