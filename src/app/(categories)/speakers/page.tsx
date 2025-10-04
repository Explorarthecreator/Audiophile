"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import ProductList from "@/components/shared/product-list";
import Loading from "@/components/loading";

const Speakers = () => {
  const speakers = useQuery(api.products.getProducts, { category: "speakers" });

  if (speakers === undefined) {
    return <Loading />;
  }
  return <div>{speakers && <ProductList products={speakers} />}</div>;
};

export default Speakers;
