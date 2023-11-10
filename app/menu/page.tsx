import { getKatMenus } from "@/utils/sanity-utils";

import Menucard from "@/components/menucard";

const page = async () => {
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
