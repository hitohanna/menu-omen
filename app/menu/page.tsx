// import { getKategori, getMenus } from "@/lib/sanity-utils";
import Link from "next/link";
import { getKatMenus, getKategoris, getMenus } from "@/utils/sanity-utils";
import { ChevronLeft } from "lucide-react";
import Menucard from "@/components/Menucard";

const page = async () => {
  // const Kategori: TKategories[] = await getKategoris();
  // const Menus: TMenus[] = await getMenus();
  const Kategori: TKategories[] = await getKatMenus();

  return (
    <div className="relative flex flex-col w-full mb-8 font-poppins">
      <Link
        href="/api/auth/signout"
        className="hidden px-4 py-2 mt-4 text-white border border-black rounded-xl bg-merah w-fit"
      >
        Logout
      </Link>
      <Link
        href={"/"}
        className="fixed z-50 flex items-center p-3 rounded-full bottom-4 right-4 bg-merah"
      >
        <ChevronLeft size={35} className="text-white" />
      </Link>

      {/* -----menu-------*/}

      <div className="gap-4 mt-3 space-y-4 sm:columns-1 lg:columns-2 sm:gap-4 columns-4">
        {Kategori?.map((kat, i) => (
          <Menucard Kategories={kat} key={i} />
        ))}
      </div>
    </div>
  );
};
export default page;
