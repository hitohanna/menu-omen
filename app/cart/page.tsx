import CartList from "@/components/element/cartList";
import Link from "next/link";
import { MoveLeft } from "lucide-react";
import LinkCheckOut from "@/components/element/linkCheckOut";

const page = () => {
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
      <LinkCheckOut />
    </div>
  );
};

export default page;
