// import { getKategori, getMenus } from "@/lib/sanity-utils";
import Link from "next/link";
import { getKatMenus, getKategoris, getMenus } from "@/utils/sanity-utils";
import { ChevronLeft } from "lucide-react";
import Menucard from "@/components/menucard";
import LoadingMenu from "@/components/element/loadingmenu";
import ButtMenu from "@/components/element/buttMenu";

const page = async () => {
  // const Kategori: TKategories[] = await getKategoris();
  // const Menus: TMenus[] = await getMenus();
  const Kategori: TKategories[] = await getKatMenus();

  return (
    <div className="relative flex flex-col w-full mb-8 font-poppins">
      <div className="gap-4 mt-24 space-y-4 sm:columns-1 lg:columns-2 sm:gap-4 columns-4 ">
        {Kategori?.map((kat, i) => (
          <Menucard Kategories={kat} key={i} />
        ))}
      </div>
    </div>
  );
};
export default page;
