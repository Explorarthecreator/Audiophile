"use client";
import { TickCircle } from "iconsax-reactjs";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { useCart } from "@/context/cart-context";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SuccessModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const { cartItems, getGrandTotal, clearCart } = useCart();
  const router = useRouter();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle className="sr-only">Success modal</DialogTitle>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        showCloseButton={false}
        className="p-6 md:p-12 space-y-8 rounded-xl w-[327px] sm:max-w-[340px] md:w-[540px] md:!max-w-[570px]"
      >
        <TickCircle className="h-16 p-0 w-16" variant="Bold" color="#D87D4A" />
        <div className="space-y-6">
          <h1 className="text-2xl md:text-[32px] font-bold w-71">
            THANK YOU <br />
            FOR YOUR ORDER
          </h1>
          <p className="opacity-50 text-[15px]">
            You will receive an email confirmation shortly.
          </p>
        </div>

        <div className="bg-[#F1F1F1] rounded-xl md:flex overflow-clip">
          <div className="p-6 w-full md:w-3/5">
            <div className="flex  justify-between pb-3 border-b border-b-black/8">
              <div className="flex items-center gap-4">
                <div className="bg-[#F1F1F1] h-16 w-16 rounded-md p-3">
                  {cartItems[0]?.image && (
                    <Image
                      src={cartItems[0].image}
                      alt={`${cartItems[0]?.name} image`}
                      width={500}
                      height={500}
                      className="object-contain"
                    />
                  )}
                </div>
                <div>
                  <h2 className="text-[15px] font-bold">
                    {cartItems[0]?.name}
                  </h2>
                  <p className="opacity-50 text-sm font-bold">
                    $ {cartItems[0]?.amount}
                  </p>
                </div>
              </div>
              <p className="opacity-50 text-[15px] font-bold">
                x{cartItems[0]?.quantity}
              </p>
            </div>

            {cartItems.length > 1 && (
              <p className="text-center pt-3 text-xs font-bold opacity-50">
                and {cartItems.length - 1} other item(s)
              </p>
            )}
          </div>
          <div className="bg-black text-white w-full md:w-2/5 p-6 md:p-0 md:flex items-center justify-center">
            <div className="space-y-2">
              <h1 className="uppercase opacity-50 text-[15px]">grand total</h1>
              <p className="text-lg font-bold">
                ${" "}
                {getGrandTotal()
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>
          </div>
        </div>

        <Button
          className="w-full uppercase"
          onClick={() => {
            router.push("/");
            setOpen(false);
            clearCart();
          }}
        >
          back to home
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default SuccessModal;
