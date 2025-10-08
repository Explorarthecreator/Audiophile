"use client";
// import { useCart } from "@/context/cart-context";
import Image from "next/image";
import { useState } from "react";
import CartPopover from "./cart-popover";
// import { Badge } from "../ui/badge";

const Cart = () => {
  //   const { cartItems } = useCart();
  const [open, setOpen] = useState(false);
  return (
    <>
      <CartPopover open={open} setOpen={setOpen} />
    </>
  );
};

export default Cart;
