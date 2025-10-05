// import { useCart } from "@/context/cart-context";
import Image from "next/image";
// import { Badge } from "../ui/badge";

const Cart = () => {
  //   const { cartItems } = useCart();
  return (
    <div className="relative w-5 h-5">
      <Image
        src={"/assets/cart.svg"}
        alt="cart-icon"
        width={500}
        height={500}
        // className="h-5 w-5"
      />
      {/* <Badge className="absolute -top-1 -right-2 w-3 h-3">
        {cartItems.length}
      </Badge> */}
    </div>
  );
};

export default Cart;
