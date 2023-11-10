"use client";
import { useCartStore } from "@/store/zustand";

const ButtMenu = ({ menu }: { menu: TMenus }) => {
  const { addToCart } = useCartStore();

  const handleCart = () => {
    addToCart({
      _id: menu._id,
      nama: menu.nama,
      harga: menu.harga,
      jumlah: 1,
    });
  };

  return (
    <>
      <button
        onClick={handleCart}
        className="px-4 py-1 font-medium text-black transition-colors bg-yellow-400 border-2 border-black rounded-full hover:bg-yellow-200"
      >
        + Keranjang
      </button>
    </>
  );
};

export default ButtMenu;
