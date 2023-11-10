import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Particles } from "@/components/utils/particles";

export default function Home() {
  return (
    <main className="relative flex flex-col w-full ">
      <Particles className="absolute inset-0 -z-10 " />
      <Hero />
      <Footer />
    </main>
  );
}
