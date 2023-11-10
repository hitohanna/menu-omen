"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

function ButtKeranjang() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.back()}
        className="fixed z-50 flex items-center p-3 rounded-full bottom-4 right-4 bg-merah"
      >
        <ChevronLeft size={35} className="text-white" />
      </button>
    </div>
  );
}

export default ButtKeranjang;
