import { ProductResponse } from "@/types";
import ProductItem from "./product-item";

const ProductList = ({ products }: { products: ProductResponse[] }) => {
  return (
    <div className="py-24 flex flex-col gap-24">
      {products &&
        products.map((product, index) => (
          <ProductItem product={product} index={index} key={product._id} />
        ))}
    </div>
  );
};

export default ProductList;
