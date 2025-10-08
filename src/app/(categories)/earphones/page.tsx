"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import ProductList from "@/components/shared/product-list";
import Loading from "@/components/loading";

const Earphones = () => {
  const earphones = useQuery(api.products.getProducts, {
    category: "earphones",
  });

  if (earphones === undefined) {
    return <Loading />;
  }
  return <div>{earphones && <ProductList products={earphones} />}</div>;
};

export default Earphones;
