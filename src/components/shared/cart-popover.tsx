import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useCart } from "@/context/cart-context";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";

const CartPopover = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const { cartItems, updateQuantity, clearCart, getCartTotal } = useCart();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger>
        <div className="relative w-5 h-5">
          <Image
            src={"/assets/cart.svg"}
            alt="cart-icon"
            width={500}
            height={500}
          />
        </div>
      </PopoverTrigger>

      <PopoverContent
        className=" z-50 w-[327px] md:w-[377px]  space-y-8 py-8 px-7"
        align="end"
        sideOffset={50}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold uppercase">
            Cart ({cartItems.length})
          </h1>
          {cartItems.length >= 1 && (
            <p
              className=" underline text-[15px] opacity-50"
              onClick={() => clearCart()}
            >
              Remove all
            </p>
          )}
        </div>

        {cartItems.length <= 0 ? (
          <p className="opacity-50">No items in you cart</p>
        ) : (
          <div className="space-y-8">
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
                  <div className="bg-[#F1F1F1] h-12 gap-2 flex items-center">
                    <Button
                      variant={"ghost"}
                      // disabled={quantity <= 1}
                      onClick={() =>
                        updateQuantity(cartItem.id, cartItem.quantity - 1)
                      }
                      className="opacity-25 px-2 text-[13px] font-bold"
                    >
                      -
                    </Button>
                    <p className="text-[13px] font-bold">{cartItem.quantity}</p>
                    <Button
                      variant={"ghost"}
                      // onClick={() => setQuantity(quantity + 1)}
                      onClick={() =>
                        updateQuantity(cartItem.id, cartItem.quantity + 1)
                      }
                      className="opacity-25 px-2 text-[13px] font-bold"
                    >
                      +
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <h3 className="opacity-50 text-[15px] uppercase">total</h3>
              <p className="text-lg font-bold">
                ${" "}
                {getCartTotal()
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
            </div>

            <Link
              href={"/checkout"}
              onClick={() => setOpen(false)}
              className={`${buttonVariants()} w-full uppercase`}
            >
              checkout
            </Link>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default CartPopover;
