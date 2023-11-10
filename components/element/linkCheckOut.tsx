"use client";

import Link from "next/link";
import { useCartStore } from "@/store/zustand";
import { EncodedUrl } from "@/utils/encodedUrl";
import { BsWhatsapp } from "react-icons/bs";

const LinkCheckOut = () => {
  const { products } = useCartStore();

  return (
    <>
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
    </>
  );
};

export default LinkCheckOut;
