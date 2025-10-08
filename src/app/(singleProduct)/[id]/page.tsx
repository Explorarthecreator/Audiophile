import Product from "@/components/shared/single-product";

export default async function SingleProduct({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <div>
      <Product id={(await params).id} />
    </div>
  );
}
