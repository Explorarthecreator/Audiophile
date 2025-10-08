"use client";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import ProductList from "@/components/shared/product-list";
import Loading from "@/components/loading";

const Headphones = () => {
  const heaphones = useQuery(api.products.getProducts, {
    category: "headphones",
  });

  if (heaphones === undefined) {
    return <Loading />;
  }

  return <div>{heaphones && <ProductList products={heaphones} />}</div>;
};

export default Headphones;
