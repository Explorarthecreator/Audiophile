"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cart-context";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Checkout = () => {
  const router = useRouter();
  const { cartItems, getCartTotal, getVAT, getGrandTotal } = useCart();
  return (
    <div className="px-6 md:px-10 xl:px-0 max-w-[1100px] m-auto py-10 space-y-10">
      <Button
        variant={"ghost"}
        onClick={() => router.back()}
        className="capitalize opacity-50 text-[15px] px-0 hover:bg-transparent"
      >
        go back
      </Button>

      <div className="grid grid-cols-3 gap-7.5">
        <div className="col-span-2 bg-white rounded-xl p-12">Form</div>
        <div className="col-span-1 bg-white rounded-xl p-8 space-y-8">
          <div className="space-y-6">
            {cartItems.map((cartItem) => (
              <div
                className="flex items-center justify-between"
                key={cartItem.id}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-[#F1F1F1] h-16 w-16 rounded-lg p-3">
                    <Image
                      src={cartItem.image}
                      alt={`${cartItem.name} image`}
                      width={500}
                      height={500}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-[15px] font-bold">{cartItem.name}</h2>
                    <p className="opacity-50 text-sm font-bold">
                      $ {cartItem.amount}
                    </p>
                  </div>
                </div>
                <p className="opacity-50 text-[15px] font-bold">
                  x{cartItem.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="opacity-50 text-[15px] uppercase">total</h3>
              <p className="text-lg font-bold">
                ${" "}
                {getCartTotal()
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="opacity-50 text-[15px] uppercase">shipping</h3>
              <p className="text-lg font-bold">$ 50</p>
            </div>

            <div className="flex items-center justify-between">
              <h3 className="opacity-50 text-[15px] uppercase">
                VAT (INCLUDED)
              </h3>
              <p className="text-lg font-bold">
                ${" "}
                {getVAT()
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <h3 className="opacity-50 text-[15px] uppercase">grand total</h3>
            <p className="text-lg font-bold text-[#D87D4A]">
              ${" "}
              {getGrandTotal()
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </p>
          </div>

          <Button className={`w-full uppercase`}>checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
