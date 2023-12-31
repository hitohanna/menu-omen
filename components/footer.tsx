import Link from "next/link";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

function Footer() {
  const codeUri = () => {
    const text = encodeURI("halo... *Rombong Omen* saya mau pesan");
    return text;
  };

  return (
    <div>
      <div className="flex flex-wrap justify-between w-full mb-8 mt-28 sm:gap-8 lg:gap-16 font-poppins">
        <div className="flex flex-col ">
          <h4 className="text-4xl leading-10 text-merah">
            All-In Foods <br /> Snacks & Drinks All Day
          </h4>
          <div className="flex flex-col ">
            <span className="w-full mt-4 bg-black border border-merah" />
            <p className="mt-4 italic font-semibold text-merah">
              TAKEAWAY ONLY
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-12 sm:text-sm xs:text-[0.8rem]">
          <div className="">
            <h4 className="font-bold text-merah">Alamat</h4>
            <p className="text-merah">
              Griya Kusuma Bangsa
              <br />
              Blok.C6 Lamongan
            </p>
          </div>
          <div className="">
            <h4 className="font-bold text-merah">Jam buka</h4>
            <p className="text-merah">senin - minggu</p>
            <p className="text-merah">0700 - capek</p>
          </div>
        </div>

        <div className="flex">
          <div className="flex gap-4 h-fit">
            <Link
              target="_blank"
              href={`https://wa.me/6285852281819?text=${codeUri()}`}
              className="p-3 text-3xl transition-colors sm:text-xl sm:p-2 myborder-merah hover:bg-kuning"
            >
              <AiOutlineWhatsApp />
            </Link>
            <Link
              target="_blank"
              href="https://instagram.com/rombongomen?igshid=MXhpMTM0Z2hzbWpxOQ=="
              className="p-3 text-3xl transition-colors sm:text-xl sm:p-2 myborder-merah hover:bg-kuning"
            >
              <AiOutlineInstagram />
            </Link>
          </div>
        </div>
      </div>
      <span className="mb-4 text-sm font-poppins text-merah">
        Design and build by © <Link href="/admin">Rombong Omen</Link> 2023
      </span>
    </div>
  );
}

export default Footer;
