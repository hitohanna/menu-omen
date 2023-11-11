"use client";
import { useCartStore } from "@/store/zustand";
import { motion, AnimatePresence, Variants } from "framer-motion";

const CartList = () => {
  const { removeFromCart, removeFromCartSatuan, addToCart, products, total } =
    useCartStore();

  const handleAdd = (prods: TMenusCart) => {
    addToCart({
      _id: prods._id,
      nama: prods.nama,
      harga: prods.harga,
      jumlah: 1,
    });
  };

  const handleRemoveSatuan = (prods: TMenusCart) => {
    removeFromCartSatuan({
      _id: prods._id,
      nama: prods.nama,
      harga: prods.harga,
      jumlah: 1,
    });
  };
  const handleRemoveCart = (prods: TMenusCart) => {
    removeFromCart(prods);
  };

  const variantsBoxContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="flex flex-col w-full font-poppins">
      {!products || products.length === 0 ? (
        <div className="flex flex-col">
          <span className="w-full my-2 border border-dashed border-zinc-500" />
          <h3 className="flex my-2 text-base italic font-normal text-zinc-400 font-poppins sm:text-sm">
            Keranjang kamu masih kosong ...
          </h3>
        </div>
      ) : (
        <AnimatePresence>
          {products.map((prod, i) => (
            <motion.div
              variants={variantsBoxContainer}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ type: "ease" }}
              className="flex flex-col"
              key={prod._id}
            >
              <span className="w-full my-2 border border-dashed border-zinc-500" />
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-baseline justify-between w-2/3 text-lg font-bold lg:text-sm sm:text-base">
                  <h3 className="flex text-xl font-semibold text-black uppercase font-poppins sm:text-sm">
                    {prod.nama}
                  </h3>

                  <div className="flex items-center">
                    <p className="justify-end font-light text-end">
                      Rp.{" "}
                      {new Intl.NumberFormat("id-ID").format(
                        parseInt(prod.harga)
                      )}{" "}
                      x{" "}
                    </p>
                    <span
                      onClick={() => handleRemoveSatuan(prod)}
                      className="ml-2 cursor-pointer border-black border inline-flex items-center justify-center w-5 h-5 text-[7pt] font-bold  text-merah bg-white   hover:text-white hover:bg-merah transition-colors duration-300"
                    >
                      -
                    </span>
                    <span className="mx-2 font-bold">{prod.jumlah}</span>
                    <span
                      onClick={() => {
                        handleAdd(prod);
                        console.log(products);
                      }}
                      className="cursor-pointer border-black border inline-flex items-center justify-center w-5 h-5 text-[7pt] font-bold  text-merah bg-kuning   hover:text-white hover:bg-merah transition-colors duration-300"
                    >
                      +
                    </span>
                  </div>
                </div>

                <span className="justify-end mr-8 text-lg font-normal text-end sm:text-sm">
                  Rp.{" "}
                  {new Intl.NumberFormat("id-ID").format(
                    parseInt(prod.harga) * prod.jumlah
                  )}
                </span>
                <button
                  onClick={() => handleRemoveCart(prod)}
                  className=" border-black border inline-flex items-center justify-center w-5 h-5 text-[7pt] font-bold  text-merah bg-white rounded-full  hover:text-white hover:bg-merah transition-colors duration-300"
                >
                  X
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      )}

      <span className="w-full my-2 border border-dashed border-zinc-500" />
      <div className="flex items-center justify-between p-4 mt-4 bg-kuning rounded-xl">
        <h3 className="text-xl font-bold">TOTAL</h3>
        <h3 className="flex justify-end w-full text-xl font-bold text-black">
          RP. {new Intl.NumberFormat("id-ID").format(total)}
        </h3>
      </div>
    </div>
  );
};

export default CartList;

{
  /* <AnimatePresence>
            <motion.span
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "ease" }}
              key={i}
            ></motion.span> */
}
