"use client";
import SuccessModal from "@/components/shared/success-modal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useCart } from "@/context/cart-context";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const Checkout = () => {
  const router = useRouter();
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const { cartItems, getCartTotal, getVAT, getGrandTotal } = useCart();
  const form = useForm<z.infer<typeof checkoutFormSchema>>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      address: "",
      city: "",
      country: "",
      email: "",
      eMoneyNumber: "",
      eMoneyPin: "",
      name: "",
      phonenumber: "",
      zipCode: "",
      paymentMethod: "eMoney",
    },
  });

  async function submit(values: z.infer<typeof checkoutFormSchema>) {
    console.log(values);
    setOpenSuccessModal(true);
  }

  return (
    <>
      <div className="px-6 md:px-10 xl:px-0 max-w-[1100px] m-auto py-10 space-y-10">
        <Button
          variant={"ghost"}
          onClick={() => router.back()}
          className="capitalize opacity-50 text-[15px] px-0 hover:bg-transparent"
        >
          go back
        </Button>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7.5">
              <div className="lg:col-span-2 bg-white rounded-xl p-6 md:p-7.5 lg:p-12 space-y-8 md:space-y-10">
                <h1 className="text-[28px] lg:text-[32px] font-bold uppercase">
                  checkout
                </h1>

                <div className="space-y-14">
                  <div className="space-y-4">
                    <h2 className="uppercase text-[13px] text-[#D87D4A] font-bold">
                      billing details
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold">
                              Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="John Doe"
                                className="opacity-40 text-sm "
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold">
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="johndoe@gmail.com"
                                className="opacity-40 text-sm "
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phonenumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold">
                              Phone Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="+1 202-555-0136"
                                className="opacity-40 text-sm "
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="uppercase text-[13px] text-[#D87D4A] font-bold">
                      shipping info
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel className="text-xs font-bold">
                              Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Enter Address"
                                className="opacity-40 text-sm "
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="zipCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold">
                              ZIP Code
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Enter ZIP Code"
                                className="opacity-40 text-sm "
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold">
                              City
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Enter City"
                                className="opacity-40 text-sm "
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold">
                              Country
                            </FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Enter Country"
                                className="opacity-40 text-sm "
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="uppercase text-[13px] text-[#D87D4A] font-bold">
                      payment details
                    </h2>

                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                          <FormItem className="grid md:grid-cols-2 col-span-2">
                            <FormLabel className="text-xs font-bold self-start">
                              Payment Method
                            </FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col gap-4"
                              >
                                <FormItem className="flex items-center gap-3  border border-[#CFCFCF] rounded-xl p-4">
                                  <FormControl>
                                    <RadioGroupItem value="eMoney" />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    e-Money
                                  </FormLabel>
                                </FormItem>
                                <FormItem className="flex items-center gap-3 border border-[#CFCFCF] rounded-xl p-4">
                                  <FormControl className="">
                                    <RadioGroupItem
                                      value="cashOnDelivery"
                                      className=""
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal">
                                    Cash on Delivery
                                  </FormLabel>
                                </FormItem>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {form.watch("paymentMethod") === "eMoney" && (
                      <div className="grid md:grid-cols-2 gap-4 mt-6 ">
                        <FormField
                          control={form.control}
                          name="eMoneyNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold">
                                e-Money Number
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Enter e-Money number"
                                  className="opacity-40 text-sm "
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="eMoneyPin"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-xs font-bold">
                                e-Money Pin
                              </FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Enter e-Money Pin"
                                  className="opacity-40 text-sm "
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-span-1 bg-white rounded-xl p-8 space-y-8 self-start">
                <h1 className="uppercase text-lg font-bold">summary</h1>
                <div className="space-y-6">
                  {cartItems.map((cartItem) => (
                    <div
                      className="flex items-center justify-between"
                      key={cartItem.id}
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-[#F1F1F1] h-16 w-16 rounded-md p-3">
                          <Image
                            src={cartItem.image}
                            alt={`${cartItem.name} image`}
                            width={500}
                            height={500}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <h2 className="text-[15px] font-bold">
                            {cartItem.name}
                          </h2>
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
                    <h3 className="opacity-50 text-[15px] uppercase">
                      shipping
                    </h3>
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
                  <h3 className="opacity-50 text-[15px] uppercase">
                    grand total
                  </h3>
                  <p className="text-lg font-bold text-[#D87D4A]">
                    ${" "}
                    {getGrandTotal()
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </div>

                <Button className={`w-full uppercase`} type="submit">
                  continue & pay
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>

      <SuccessModal open={openSuccessModal} setOpen={setOpenSuccessModal} />
    </>
  );
};

const checkoutFormSchema = z
  .object({
    name: z.string().min(1, "name is required"),
    email: z.email(),
    phonenumber: z.string().min(11, "phone number is required"),
    address: z.string().min(3, "address is required"),
    zipCode: z.string().min(5, "zip code is required"),
    city: z.string().min(1, "city is required"),
    country: z.string().min(1, "country is required"),
    eMoneyNumber: z
      .string()

      .optional(),
    eMoneyPin: z.string().optional(),
    paymentMethod: z.enum(["eMoney", "cashOnDelivery"], {
      error: "You need to select a payment method",
    }),
  })
  .refine(
    (data) => {
      if (data.paymentMethod === "eMoney") {
        return data.eMoneyNumber && data.eMoneyNumber.length === 9;
      }
      return true;
    },
    {
      message: "e-Money number is required and must be 9 digits",
      path: ["eMoneyNumber"],
    }
  )
  .refine(
    (data) => {
      if (data.paymentMethod === "eMoney") {
        return data.eMoneyPin && data.eMoneyPin.length === 4;
      }
      return true;
    },
    {
      message: "e-Money PIN is required and must be 4 digits",
      path: ["eMoneyPin"],
    }
  );
export default Checkout;
