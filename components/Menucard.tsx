"use client";

import Image from "next/image";
import ListMenu from "./element/listMenu";
import { Particles } from "./utils/particles";
import { motion } from "framer-motion";

const Menucard = async ({ Kategories }: { Kategories: TKategories }) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "ease" }}
    >
      <div className="relative flex flex-col py-4 px-5 overflow-hidden myborder-putih">
        <h3 className="text-3xl uppercase font-changa text-merah">
          MENU {Kategories.title}
        </h3>
        <div className="relative w-full h-auto mt-6 aspect-video">
          <Particles className="absolute inset-0 z-10 " />
          <span className="absolute z-0 w-full overflow-visible bg-black -bottom-1 -right-1 aspect-video rounded-xl" />

          <Image
            src={Kategories.gambar}
            width={500}
            height={500}
            blurDataURL="/menublur.png"
            placeholder="blur"
            alt="Gambar Kategori"
            className="absolute object-cover w-full border-2 border-black z-1 aspect-video rounded-xl bg-kuning"
          />
        </div>
        {Kategories.menu.map((menu, i) => (
          <ListMenu Menu={menu} key={i} />
        ))}
      </div>
    </motion.div>
  );
};

export default Menucard;
