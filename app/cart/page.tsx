"use client";
import { useCartStore } from "@/store/zustand";
import CartList from "@/components/element/cartList";
import Link from "next/link";
import { EncodedUrl } from "@/utils/encodedUrl";
import { MoveLeft } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const page = () => {
  const { products } = useCartStore();
  return (
    <div className="flex flex-col pt-[4.7rem] w-full max-w-3xl mx-auto font-poppins mb-8">
      <div className="flex items-center justify-between mt-4 group text-black/80">
        <div className="flex items-center">
          <span className="mr-2">
            <MoveLeft className="transition-transform group-hover:-translate-x-2" />
          </span>
          <Link href="/menu" className="font-bold font-poppins">
            MENU
          </Link>
        </div>
      </div>
      <div className="flex flex-col p-4 mt-4 myborder-putih">
        <h3 className="mb-4 text-2xl font-bold">ITEMS</h3>
        <CartList />
      </div>
      <Link
        target="_blank"
        href={`https://wa.me/6285852281819?text=${EncodedUrl(products)}`}
        className={`${
          products.length < 1
            ? "hidden"
            : "flex items-center justify-center w-full p-4 mt-4 text-xl font-bold text-white transition-colors bg-green-600 border rounded-xl hover:bg-green-700"
        }`}
      >
        <span className="mr-4 font-bold ">
          <BsWhatsapp />
        </span>
        <span className="tracking-wide">CHECKOUT</span>
      </Link>
    </div>
  );
};

export default page;
